// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file manager.proto (package haven, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum haven.Status
 */
export enum Status {
  /**
   * @generated from enum value: RUNNING = 0;
   */
  RUNNING = 0,

  /**
   * Worker doesn't exist.
   *
   * @generated from enum value: STOPPED = 1;
   */
  STOPPED = 1,

  /**
   * @generated from enum value: STARTING = 2;
   */
  STARTING = 2,

  /**
   * When going to STOPPED or PAUSED.
   *
   * @generated from enum value: STOPPING = 3;
   */
  STOPPING = 3,

  /**
   * @generated from enum value: PAUSED = 4;
   */
  PAUSED = 4,

  /**
   * @generated from enum value: ERROR = 5;
   */
  ERROR = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(Status)
proto3.util.setEnumType(Status, "haven.Status", [
  { no: 0, name: "RUNNING" },
  { no: 1, name: "STOPPED" },
  { no: 2, name: "STARTING" },
  { no: 3, name: "STOPPING" },
  { no: 4, name: "PAUSED" },
  { no: 5, name: "ERROR" },
]);

/**
 * @generated from message haven.Empty
 */
export class Empty extends Message<Empty> {
  constructor(data?: PartialMessage<Empty>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.Empty";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty {
    return new Empty().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty {
    return new Empty().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty {
    return new Empty().fromJsonString(jsonString, options);
  }

  static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean {
    return proto3.util.equals(Empty, a, b);
  }
}

/**
 * @generated from message haven.SetupRequest
 */
export class SetupRequest extends Message<SetupRequest> {
  /**
   * @generated from field: string key_file = 1;
   */
  keyFile = "";

  constructor(data?: PartialMessage<SetupRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.SetupRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_file", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetupRequest {
    return new SetupRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetupRequest {
    return new SetupRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetupRequest {
    return new SetupRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetupRequest | PlainMessage<SetupRequest> | undefined, b: SetupRequest | PlainMessage<SetupRequest> | undefined): boolean {
    return proto3.util.equals(SetupRequest, a, b);
  }
}

/**
 * @generated from message haven.GenerateRequest
 */
export class GenerateRequest extends Message<GenerateRequest> {
  /**
   * @generated from field: string model = 1;
   */
  model = "";

  /**
   * @generated from field: string prompt = 2;
   */
  prompt = "";

  constructor(data?: PartialMessage<GenerateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.GenerateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "model", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "prompt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateRequest {
    return new GenerateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateRequest {
    return new GenerateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateRequest {
    return new GenerateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GenerateRequest | PlainMessage<GenerateRequest> | undefined, b: GenerateRequest | PlainMessage<GenerateRequest> | undefined): boolean {
    return proto3.util.equals(GenerateRequest, a, b);
  }
}

/**
 * @generated from message haven.GenerateResponse
 */
export class GenerateResponse extends Message<GenerateResponse> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  constructor(data?: PartialMessage<GenerateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.GenerateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateResponse {
    return new GenerateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateResponse {
    return new GenerateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateResponse {
    return new GenerateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GenerateResponse | PlainMessage<GenerateResponse> | undefined, b: GenerateResponse | PlainMessage<GenerateResponse> | undefined): boolean {
    return proto3.util.equals(GenerateResponse, a, b);
  }
}

/**
 * @generated from message haven.Model
 */
export class Model extends Message<Model> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: haven.Status status = 2;
   */
  status = Status.RUNNING;

  constructor(data?: PartialMessage<Model>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.Model";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Model {
    return new Model().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Model {
    return new Model().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Model {
    return new Model().fromJsonString(jsonString, options);
  }

  static equals(a: Model | PlainMessage<Model> | undefined, b: Model | PlainMessage<Model> | undefined): boolean {
    return proto3.util.equals(Model, a, b);
  }
}

/**
 * @generated from message haven.ListModelsResponse
 */
export class ListModelsResponse extends Message<ListModelsResponse> {
  /**
   * @generated from field: repeated haven.Model models = 1;
   */
  models: Model[] = [];

  constructor(data?: PartialMessage<ListModelsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.ListModelsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "models", kind: "message", T: Model, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListModelsResponse {
    return new ListModelsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListModelsResponse {
    return new ListModelsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListModelsResponse {
    return new ListModelsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListModelsResponse | PlainMessage<ListModelsResponse> | undefined, b: ListModelsResponse | PlainMessage<ListModelsResponse> | undefined): boolean {
    return proto3.util.equals(ListModelsResponse, a, b);
  }
}

/**
 * @generated from message haven.ModelName
 */
export class ModelName extends Message<ModelName> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<ModelName>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "haven.ModelName";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModelName {
    return new ModelName().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModelName {
    return new ModelName().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModelName {
    return new ModelName().fromJsonString(jsonString, options);
  }

  static equals(a: ModelName | PlainMessage<ModelName> | undefined, b: ModelName | PlainMessage<ModelName> | undefined): boolean {
    return proto3.util.equals(ModelName, a, b);
  }
}

