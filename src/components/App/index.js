import React from 'react';
import './styles.css';
// hooks
import { useAppState, useWeb3 } from "./hooks";
// components
import ErrorMessage from '../ErrorMessage';
import TokenBalances from '../TokenBalances';
import GuardiansCount from '../GuardiansCount';
import EtherBalance from '../EtherBalance';
import WalletInput from '../WalletInput';

function App() {

  const web3 = useWeb3();

  const {
    wallet,
    balance,
    tokenBalance,
    guardians,
    snackOpen,
    error,
    handleWalletChange,
    handleWalletInfo,
    handleClose,
    handleKeyDown
  } = useAppState(web3);

  return (
    <div className="App">
      <WalletInput 
        wallet={wallet} 
        handleWalletInfo={handleWalletInfo} 
        handleWalletChange={handleWalletChange} 
        handleKeyDown={handleKeyDown}
      />
      <EtherBalance balance={balance}/>
      <GuardiansCount guardians={guardians}/>
      <TokenBalances tokenBalance={tokenBalance}/>
      <ErrorMessage snackOpen={snackOpen} error={error} handleClose={handleClose}/>
    </div>
  );
}

export default App;
