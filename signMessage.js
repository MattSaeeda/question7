var verifyMessage = require('verifyMessage');
  
  let provider = ethers.getDefaultProvider('ropsten');
  
 
  let privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
  let wallet = new ethers.Wallet(privateKey);
let message = "Hello World";
  

  let flatSig = await wallet.signMessage(message);
  

  let sig = ethers.utils.splitSignature(flatSig);

  let recovered = verifyMessgae(message , sig);
  
  console.log("This is senders address" + recovered);
  
  