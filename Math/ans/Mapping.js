/*
    Kind of easy one, if you really know how to access the storages and the way to manipulating it if the code contains any vulnerability. Well this question be well descripted down on the original 'Capture the Ether' challenge, cuz most of the changes have been done in the latest solidity versions regarding this. Sharing the link -> https://capturetheether.com/challenges/math/mapping/

    Let's deep dive in this:

    Prerequisites: Must get familiar about solidity storage slots, how it stores data and how data from different datatypes are been stored in these slots

    Now, there was a weird thing with this challenge contract, there wasn't any function or way to change the `isComplete` boolean value. Well that strucked me too!

    So, we need to find a way such that this `isComplete` boolean value can be changed to true
*/