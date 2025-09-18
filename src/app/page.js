'use client';
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";

export default function Home() {
  // state variables for user's ENS name
  const [ens, setEns] = useState("");

  const { address } = useAccount();
  console.log(address);

  const ensName = useEnsName({
    address: address,
  });

  console.log(ensName.data);
  // undefined if user has no ens name

  useEffect(() => {
    setEns(ensName.data);
  }, [ensName.data]);

  const renderButton = () => {
    if(address) {
      <div>Wallet connected</div>;
    } else {
      return (
        <ConnectButton />
      );
    }
  };
  return (
    <div>
      <div className={" min-h-[90vh] flex justify-center items-center font-sans max-[1000px]:w-full max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:items-center  "}>
        <div className="pl-12">
          <h1 className="text-4xl my-8  mx-0 ">
            Welcome to LearnWeb3 Punks {ens ? ens : address}!
          </h1>
          <div className={"leading-4 my-8 mx-0 text-xl"}>
            {/* Using HTML Entities for the apostrophe */}
            It&#39;s an NFT collection for LearnWeb3 Punks.
          </div>
          {renderButton()}
        </div>
        <div>
          <img className={" w-[70%] h-[50%] ml-[20%]"} src="/learnweb3punks.png" />
        </div>
      </div>

      <footer className={"flex py-[1.4rem] border-t-2 border-[#eaeaea] justify-center items-center"}>

        Made with &#10084; by LearnWeb3 Punks
      </footer>
    </div>
  );
}