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
 * @param {org.acme.food.Subsidy.approveTransaction} approveTransaction - the closeBidding transaction
 * @transaction
 */

function approveTransaction(object) {
    var packageSent = object.packageSent;

    // transferPackageObject.rfidOfItemsIncluded.forEach(function(element) {
    // });

    if (typeof packageSent.transporter == "undefined")
        packageSent.transporter = []
    packageSent.transporter.push(object.transporter)


    if (object.weight < packageSent.weight * 1.05 || object.weight > packageSent.weight * 0.95) {
        packageSent.warningFlag=true
        packageSent.weightCracked=object.weight
        // SEND MSG
    }
    packageSent.lastSeenTimeStamp = new Date().getTime()
    packageSent.location = object.location

    return getAssetRegistry('org.acme.food.Subsidy.package')
        .then(function (packageRegistry) {
            // SEND MSG 
            return packageRegistry.update(packageSent);
        })
}

/**
 * Close the bidding for a vehicle listing and choose the
 * highest bid that is over the asking price
 * @param {org.acme.food.Subsidy.disturbte} disturbte - the closeBidding transaction
 * @transaction
 */
function disturbte(object) {

    return  // connect to citzen AUTH
    // handle error
}