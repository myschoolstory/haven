// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file worker.proto (package worker, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum worker.WorkerStatus
 */
export enum WorkerStatus {
  /**
   * @generated from enum value: OK = 0;
   */
  OK = 0,

  /**
   * @generated from enum value: STOPPING = 1;
   */
  STOPPING = 1,

  /**
   * @generated from enum value: OFFLINE = 99;
   */
  OFFLINE = 99,
}
// Retrieve enum metadata with: proto3.getEnumType(WorkerStatus)
proto3.util.setEnumType(WorkerStatus, "worker.WorkerStatus", [
  { no: 0, name: "OK" },
  { no: 1, name: "STOPPING" },
  { no: 99, name: "OFFLINE" },
]);

/**
 * @generated from enum worker.Role
 */
export enum Role {
  /**
   * @generated from enum value: ASSISTANT = 0;
   */
  ASSISTANT = 0,

  /**
   * @generated from enum value: USER = 1;
   */
  USER = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Role)
proto3.util.setEnumType(Role, "worker.Role", [
  { no: 0, name: "ASSISTANT" },
  { no: 1, name: "USER" },
]);

/**
 * @generated from message worker.HealthRequest
 */
export class HealthRequest extends Message$1<HealthRequest> {
  constructor(data?: PartialMessage<HealthRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.HealthRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthRequest {
    return new HealthRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthRequest {
    return new HealthRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthRequest {
    return new HealthRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HealthRequest | PlainMessage<HealthRequest> | undefined, b: HealthRequest | PlainMessage<HealthRequest> | undefined): boolean {
    return proto3.util.equals(HealthRequest, a, b);
  }
}

/**
 * @generated from message worker.HealthResponse
 */
export class HealthResponse extends Message$1<HealthResponse> {
  /**
   * @generated from field: worker.WorkerStatus status = 1;
   */
  status = WorkerStatus.OK;

  constructor(data?: PartialMessage<HealthResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.HealthResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(WorkerStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthResponse {
    return new HealthResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthResponse {
    return new HealthResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthResponse {
    return new HealthResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthResponse | PlainMessage<HealthResponse> | undefined, b: HealthResponse | PlainMessage<HealthResponse> | undefined): boolean {
    return proto3.util.equals(HealthResponse, a, b);
  }
}

/**
 * @generated from message worker.ShutdownRequest
 */
export class ShutdownRequest extends Message$1<ShutdownRequest> {
  constructor(data?: PartialMessage<ShutdownRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.ShutdownRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShutdownRequest {
    return new ShutdownRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShutdownRequest {
    return new ShutdownRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShutdownRequest {
    return new ShutdownRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ShutdownRequest | PlainMessage<ShutdownRequest> | undefined, b: ShutdownRequest | PlainMessage<ShutdownRequest> | undefined): boolean {
    return proto3.util.equals(ShutdownRequest, a, b);
  }
}

/**
 * @generated from message worker.ShutdownResponse
 */
export class ShutdownResponse extends Message$1<ShutdownResponse> {
  constructor(data?: PartialMessage<ShutdownResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.ShutdownResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShutdownResponse {
    return new ShutdownResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShutdownResponse {
    return new ShutdownResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShutdownResponse {
    return new ShutdownResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ShutdownResponse | PlainMessage<ShutdownResponse> | undefined, b: ShutdownResponse | PlainMessage<ShutdownResponse> | undefined): boolean {
    return proto3.util.equals(ShutdownResponse, a, b);
  }
}

/**
 * @generated from message worker.Message
 */
export class Message extends Message$1<Message> {
  /**
   * @generated from field: worker.Role role = 1;
   */
  role = Role.ASSISTANT;

  /**
   * @generated from field: string content = 2;
   */
  content = "";

  constructor(data?: PartialMessage<Message>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.Message";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role", kind: "enum", T: proto3.getEnumType(Role) },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message {
    return new Message().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message {
    return new Message().fromJsonString(jsonString, options);
  }

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean {
    return proto3.util.equals(Message, a, b);
  }
}

/**
 * @generated from message worker.ChatCompletionRequest
 */
export class ChatCompletionRequest extends Message$1<ChatCompletionRequest> {
  /**
   * @generated from field: repeated worker.Message messages = 1;
   */
  messages: Message[] = [];

  constructor(data?: PartialMessage<ChatCompletionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.ChatCompletionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: Message, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCompletionRequest {
    return new ChatCompletionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCompletionRequest {
    return new ChatCompletionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCompletionRequest {
    return new ChatCompletionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCompletionRequest | PlainMessage<ChatCompletionRequest> | undefined, b: ChatCompletionRequest | PlainMessage<ChatCompletionRequest> | undefined): boolean {
    return proto3.util.equals(ChatCompletionRequest, a, b);
  }
}

/**
 * @generated from message worker.ChatCompletionResponse
 */
export class ChatCompletionResponse extends Message$1<ChatCompletionResponse> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  constructor(data?: PartialMessage<ChatCompletionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "worker.ChatCompletionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatCompletionResponse {
    return new ChatCompletionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatCompletionResponse {
    return new ChatCompletionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatCompletionResponse {
    return new ChatCompletionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChatCompletionResponse | PlainMessage<ChatCompletionResponse> | undefined, b: ChatCompletionResponse | PlainMessage<ChatCompletionResponse> | undefined): boolean {
    return proto3.util.equals(ChatCompletionResponse, a, b);
  }
}

