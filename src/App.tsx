import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "./thirdweb.svg";
import {Counter} from "./counter"
import { client ,chain} from "./client";
import { inAppWallet } from "thirdweb/wallets";

export function App() {
	
	return (
		<main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
			<div className="py-20">
				<div className="flex justify-center mb-20">
					<ConnectButton
						client={client}
						chain={chain}
						accountAbstraction={{
							chain: chain, // the chain where your smart accounts will be or is deployed
							sponsorGas: true, // enable or disable sponsored transactions
						  }}
					/>
				</div>
				<div>

				<Counter/>
				</div>
			</div>
		</main>
	);
}
