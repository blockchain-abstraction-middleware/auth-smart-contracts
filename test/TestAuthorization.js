const Authorization = artifacts.require("../contracts/Authorization.sol");

const { testWillThrow } =  require('./utils/helpers')

contract('Authorization', (accounts) => {
  const admin = accounts[0];
  const pleb = accounts[1];

  let authorization;

  describe("Testing the Authorization Smart Contract", ()=> {
    before(async () => {
      authorization = await Authorization.new()
    })

    it("should allow a user to subscribe", async () => {
      const subscription =  await authorization.subscribe({ value: 100000000000000000 })
  
      assert.equal(
        subscription.logs[0].args.account,
        admin,
        "Incorrect user subscribed"
      )
    });

    it("a pleb user should get a contract address", async () => {
      const subscription =  await authorization.widthdraw()
  
      assert.equal(
        subscription.logs[0].args.hasWithdrawn,
        true,
        "Owner was not able to widthdraw eth"
      )
    });
  
    it("should not allow pleb to widthdraw ETH", async () => {
      await testWillThrow(
        authorization.widthdraw,
        { from: pleb },
        "Ownable: caller is not the owner"
      )
    });
  })


});