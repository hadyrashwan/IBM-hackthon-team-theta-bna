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
 * @param {org.acme.food.Subsidy.transferPackage} transferPackage - the closeBidding transaction
 * @transaction
 */

function transferPackage(object) {
    var packageSent = object.packageSent;

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
    packageSent.location = object.destination
    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            return packageRegistry.update(packageSent);
        })
}




/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.createPackage} createPackage - the closeBidding transaction
 * @transaction
 */

function createPackage(object) {
    var packageSent = object.packageSent;

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
    packageSent.location = object.destination
    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            return packageRegistry.update(packageSent);
        })
}



/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.approveTransaction} approveTransaction - the closeBidding transaction
 * @transaction
 */

function approveTransaction(object) {
    var packageSent = object.packageSent;
    packageSent.approvedBy.push(object.transporter.getIdentfier())
    // by default we mark the listing as RESERVE_NOT_MET

    // transferPackageObject.rfidOfItemsIncluded.forEach(function(element) {
    // });
    packageSent.lastSeenTimeStamp = new Date().getTime()
    packageSent.location = object.destination

    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            return packageRegistry.update(packageSent);
        })
}



/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.transferPackage} transferPackage - the closeBidding transaction
 * @transaction
 */

function transferPackage(object) {
    var packageSent = object.packageSent;

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
    packageSent.location = object.destination
    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            return packageRegistry.update(packageSent);
        })
}



/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.disturbteFromPackage} disturbteFromPackage - the closeBidding transaction
 * @transaction
 */

function disturbteFromPackage(object) {
    var packageSent = object.packageSent;
    packageSent.numberOfItems--
        var index = packageSent.indexOf(object.rfid);
    if (index > -1) {
        packageSent.splice(index, 1);
    } // {
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
    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            return packageRegistry.update(packageSent);
        })
}


/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.giveMoney} giveMoney - the closeBidding transaction
 * @transaction
 */

function giveMoney(object) {
    var wallet = object.wallet;
    var money = object.money;
    wallet.money = wallet.money + money
    // packageSent.currentHolder=
    // highestOffer = listing.offers[0];
    return getAssetRegistry('org.acme.food.Subsidy.wallet')
        .then(function (packageRegistry) {
            return packageRegistry.update(wallet);
        })
}

//

// return getAssetRegistry('org.acme.food.Subsidy.wallet')
//     .then(function (registry) {
//         var factory = getFactory();
//         // Create the bond asset.
//         var walletAsset = factory.newResource('org.acme.food.Subsidy', 'wallet', new Date().getTimer());
//         walletAsset.blanace = 0;
//         walletAsset.toClaimMoney = 0;
//         // Add the wallet asset to the registry.
//         return registry.add(walletAsset);
//     }).then(function() {
//         return getAssetRegistry('org.acme.food.Subsidy.package')
//     })
//     .then(function(registry) {
//            var factory = getFactory();
//         // Create the bond asset.
//         var packageAsset = factory.newResource('org.acme.food.Subsidy', 'package', new Date().getTimer());
//         packageAsset.blanace = 0;
//         packageAsset.toClaimMoney = 0;
//         packageAsset.packgaType= object.packgaType,
//         packageAsset.location= object.location,
//         packageAsset.weight= object.weight,
//         packageAsset.weightUnit= object.weightUnit,
//         packageAsset.rfidOfItemsIncluded= [],
//         packageAsset.numberOfItems= 0
//         return registry.add(walletAsset);
//     })