#!/bin/bash

# Import wallet to the file
touch sps-lite-deployer-wallet.txt
echo $ICP_DEPLOYER_WALLET > sps-lite-deployer-wallet.txt

# Import identity to the file
touch sps-lite-deployer.pem
echo $ICP_DEPLOYER_KEY | tr -d '\r' > sps-lite-deployer.pem