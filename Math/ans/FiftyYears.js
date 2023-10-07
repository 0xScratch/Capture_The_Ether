/*
    This is a kind of interesting one, and it be quite visible too where the vulnerability lies in the contract..

    Just this level is like the collaboration of past ones

    Let's deep dive:

    1. So, the prime vulnerability is with the code in the else block of `upsert()` function.
    2. They are referring to storage slots 0 and 1, that means contribution.amount value is equivalent to slot 0 which stores up the queue's length, and contribution.unlockTimestamp is equivalent to slot 1 which stores up the head.
    3. Now, the thing we gonna do is to transfer all the funds to us, but for this we need to pass the 2nd `require` check inside the function `withdraw` -> require(block.timestamp >= queue[index].unlockTimestamp);
    4. We can't pass this check directly, for this we have to make atleast one value.timestamp inside the queue to be 0..Thus, this becomes kind of tricky..
    5. For this, 
*/