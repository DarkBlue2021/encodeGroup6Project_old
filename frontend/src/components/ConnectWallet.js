import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>

        <div className="col-6 p-4 text-center">

          <h1> My Future Lab </h1> 
          <h3> A Decentralised NFT Marketplace</h3> 
          
          <br></br>
          
            

          <br></br>

          <p>To login, connect to your wallet </p>
          
          <br></br>

          <button
            className="btn btn-warning"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
