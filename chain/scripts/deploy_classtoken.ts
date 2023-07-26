import { ethers } from "hardhat";

async function main () {

    const initialSupply = ethers.parseEther('10000.0');
    const ClassToken = await ethers.getContractFactory("ClassToken");
    const token = await ClassToken.deploy(initialSupply);
    const address = await token.getAddress();
    console.log("ClassToken deployed to: ", address);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});