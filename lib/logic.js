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

    // transferPackageObject.rfidOfItemsIncluded.forEach(function(element) {
    // });
    packageSent.lastSeenTimeStamp = new Date().getTime()
    packageSent.location = object.destination
    packageSent.transporter.push(object.transporter)
    packageSent.expectedToReceive=object.receiver

    if(object.weight > packageSent.weight*1.05 || object.weight < packageSent.weight*0.95 ){
      throw new Error
    }

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
    packageSent.approvedBy.push(object.transporter)

    // transferPackageObject.rfidOfItemsIncluded.forEach(function(element) {
    // });
    packageSent.lastSeenTimeStamp = new Date().getTime()
    packageSent.location = object.destination
    packageSent.transporter=object.transporter;

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
        packageSent.rfidOfItemsIncluded.splice(index, 1);
    }

    // transferPackageObject.rfidOfItemsIncluded.forEach(function(element) {
    // });
    packageSent.lastSeenTimeStamp = new Date().getTime()

    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            return packageRegistry.update(packageSent);
        })
}

