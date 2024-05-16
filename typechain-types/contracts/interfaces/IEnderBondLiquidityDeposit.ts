/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IEnderBondLiquidityDepositInterface extends Interface {
  getFunction(nameOrSignature: "depositedIntoBond"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositedIntoBond",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositedIntoBond",
    data: BytesLike
  ): Result;
}

export interface IEnderBondLiquidityDeposit extends BaseContract {
  connect(runner?: ContractRunner | null): IEnderBondLiquidityDeposit;
  waitForDeployment(): Promise<this>;

  interface: IEnderBondLiquidityDepositInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  depositedIntoBond: TypedContractMethod<
    [index: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        user: string;
        principal: bigint;
        bonfees: bigint;
        maturity: bigint;
      }
    ],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "depositedIntoBond"
  ): TypedContractMethod<
    [index: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        user: string;
        principal: bigint;
        bonfees: bigint;
        maturity: bigint;
      }
    ],
    "nonpayable"
  >;

  filters: {};
}