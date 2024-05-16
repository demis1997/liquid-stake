/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILybraFinance,
  ILybraFinanceInterface,
} from "../../../contracts/interfaces/ILybraFinance";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "depositAssetToMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ILybraFinance__factory {
  static readonly abi = _abi;
  static createInterface(): ILybraFinanceInterface {
    return new Interface(_abi) as ILybraFinanceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILybraFinance {
    return new Contract(address, _abi, runner) as unknown as ILybraFinance;
  }
}
