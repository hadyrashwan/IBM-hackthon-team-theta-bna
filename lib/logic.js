/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.createPackage} createPackage - the closeBidding transaction
 * @transaction
 */

function createPackage(closeBidding) {
    var listing = closeBidding.listing;
    if (listing.state !== 'FOR_SALE') {
        throw new Error('Listing is not FOR SALE');
    }
    // by default we mark the listing as RESERVE_NOT_MET
    listing.state = 'RESERVE_NOT_MET';
    var highestOffer = null;
    var buyer = null;
    var seller = null;
    if (listing.offers && listing.offers.length > 0) {
        // sort the bids by bidPrice
        listing.offers.sort(function (a, b) {
            return (b.bidPrice - a.bidPrice);
        });
        highestOffer = listing.offers[0];
        if (highestOffer.bidPrice >= listing.reservePrice) {
            // mark the listing as SOLD
            listing.state = 'SOLD';
            buyer = highestOffer.member;
            seller = listing.vehicle.owner;
            // update the balance of the seller
            console.log('#### seller balance before: ' + seller.balance);
            seller.balance += highestOffer.bidPrice;
            console.log('#### seller balance after: ' + seller.balance);
            // update the balance of the buyer
            console.log('#### buyer balance before: ' + buyer.balance);
            buyer.balance -= highestOffer.bidPrice;
            console.log('#### buyer balance after: ' + buyer.balance);
            // transfer the vehicle to the buyer
            listing.vehicle.owner = buyer;
            // clear the offers
            listing.offers = null;
        }
    }
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (vehicleRegistry) {
            // save the vehicle
            if (highestOffer) {
                return vehicleRegistry.update(listing.vehicle);
            } else {
                return true;
            }
        })
        .then(function () {
            return getAssetRegistry('org.acme.food.Subsidy.package')
        })
        .then(function (vehicleListingRegistry) {
            // save the vehicle listing
            return vehicleListingRegistry.update(listing);
        })
        .then(function () {
            return getParticipantRegistry('org.acme.food.Subsidy.package')
        })
        .then(function (userRegistry) {
            // save the buyer
            if (listing.state == 'SOLD') {
                return userRegistry.updateAll([buyer, seller]);
            } else {
                return true;
            }
        });
}



/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.transferPackage} transferPackage - the closeBidding transaction
 * @transaction
 */



function transferPackage(transferPackageObject) {
    var packageSent = transferPackageObject.packageSent;

// {
//     "$class": "org.acme.food.Subsidy.transferPackage",
//     "packageSent": "resource:org.acme.food.Subsidy.package#id:8965",
//     "source": "",
//     "destination": "",
//     "weight": 0,
//     "location": "",
//     "rfidOfItemsIncluded": [],
//     "transporter": "resource:org.acme.food.Subsidy.transporter#id:7644"
// }


    // by default we mark the listing as RESERVE_NOT_MET

    // transferPackageObject.rfidOfItemsIncluded.forEach(function(element) {
    // });
    packageSent.lastSeenTimeStamp = new Date().getTime()
    packageSent.location = transferPackageObject.destination
    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
                return packageRegistry.update(packageSent);
        })
}


/**
 * Make an Offer for a VehicleListing
 * @param {org.acme.food.Subsidy.approveTransaction} approveTransaction - the offer
 * @transaction
 */
function approveTransaction(offer) {
    var listing = offer.listing;
    if (listing.state !== 'FOR_SALE') {
        throw new Error('Listing is not FOR SALE');
    }
    if (listing.offers == null) {
        listing.offers = [];
    }
    listing.offers.push(offer);
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (vehicleListingRegistry) {
            // save the vehicle listing
            return vehicleListingRegistry.update(listing);
        });
}