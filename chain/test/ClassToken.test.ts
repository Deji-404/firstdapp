import { expect } from "chai";
import { ethers } from "hardhat";

describe("ClassToken", function() {

    it("Should have the correct initial supply", async function () {
        const initialSupply = ethers.parseEther('10000.0');
        const ClassToken = await ethers.getContractFactory("ClassToken");
        const token = await ClassToken.deploy(initialSupply);
        await token.waitForDeployment();
        expect( await token.totalSupply()).to.equal(initialSupply);
    });
});