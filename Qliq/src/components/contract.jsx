
// import React, { useEffect } from 'react';
// import useContractStore from '../store/userContractStore';

// const ContractPage = () => {
//   const { getRandomNumber, setValue, data, account } = useContractStore();

//   useEffect(() => {
//     getRandomNumber();
//   }, [getRandomNumber]);

//   const handleSetValue = async () => {
//     await setValue(42); 
//   };

//   return (
//     <div>
//       <h1 className='bg-blue-500'>Smart Contract Interaction</h1>
//       <p>Account: {account}</p>
//       <button onClick={handleSetValue}>Set Value to 42</button>
//       <p>Random Number: {data}</p>
//     </div>
//   );
// };

// export default ContractPage;
