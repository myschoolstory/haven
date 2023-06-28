"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import collections.abc
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.internal.enum_type_wrapper
import google.protobuf.message
import sys
import typing

if sys.version_info >= (3, 10):
    import typing as typing_extensions
else:
    import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

class _Role:
    ValueType = typing.NewType("ValueType", builtins.int)
    V: typing_extensions.TypeAlias = ValueType

class _RoleEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[_Role.ValueType], builtins.type):
    DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
    SYSTEM: _Role.ValueType  # 0
    USER: _Role.ValueType  # 1

class Role(_Role, metaclass=_RoleEnumTypeWrapper): ...

SYSTEM: Role.ValueType  # 0
USER: Role.ValueType  # 1
global___Role = Role

class _Status:
    ValueType = typing.NewType("ValueType", builtins.int)
    V: typing_extensions.TypeAlias = ValueType

class _StatusEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[_Status.ValueType], builtins.type):
    DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
    ONLINE: _Status.ValueType  # 0
    UNREACHABLE: _Status.ValueType  # 1
    PAUSED: _Status.ValueType  # 2
    ERROR: _Status.ValueType  # 3

class Status(_Status, metaclass=_StatusEnumTypeWrapper): ...

ONLINE: Status.ValueType  # 0
UNREACHABLE: Status.ValueType  # 1
PAUSED: Status.ValueType  # 2
ERROR: Status.ValueType  # 3
global___Status = Status

class _GpuType:
    ValueType = typing.NewType("ValueType", builtins.int)
    V: typing_extensions.TypeAlias = ValueType

class _GpuTypeEnumTypeWrapper(google.protobuf.internal.enum_type_wrapper._EnumTypeWrapper[_GpuType.ValueType], builtins.type):
    DESCRIPTOR: google.protobuf.descriptor.EnumDescriptor
    A100: _GpuType.ValueType  # 0
    A100_80GB: _GpuType.ValueType  # 1
    T4: _GpuType.ValueType  # 2

class GpuType(_GpuType, metaclass=_GpuTypeEnumTypeWrapper): ...

A100: GpuType.ValueType  # 0
A100_80GB: GpuType.ValueType  # 1
T4: GpuType.ValueType  # 2
global___GpuType = GpuType

@typing_extensions.final
class Empty(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    def __init__(
        self,
    ) -> None: ...

global___Empty = Empty

@typing_extensions.final
class SetupRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    KEY_FILE_FIELD_NUMBER: builtins.int
    key_file: builtins.str
    def __init__(
        self,
        *,
        key_file: builtins.str | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["_key_file", b"_key_file", "key_file", b"key_file"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["_key_file", b"_key_file", "key_file", b"key_file"]) -> None: ...
    def WhichOneof(self, oneof_group: typing_extensions.Literal["_key_file", b"_key_file"]) -> typing_extensions.Literal["key_file"] | None: ...

global___SetupRequest = SetupRequest

@typing_extensions.final
class Message(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    ROLE_FIELD_NUMBER: builtins.int
    CONTENT_FIELD_NUMBER: builtins.int
    role: global___Role.ValueType
    content: builtins.str
    def __init__(
        self,
        *,
        role: global___Role.ValueType = ...,
        content: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["content", b"content", "role", b"role"]) -> None: ...

global___Message = Message

@typing_extensions.final
class ChatCompletionRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    WORKER_NAME_FIELD_NUMBER: builtins.int
    MESSAGES_FIELD_NUMBER: builtins.int
    worker_name: builtins.str
    @property
    def messages(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Message]: ...
    def __init__(
        self,
        *,
        worker_name: builtins.str = ...,
        messages: collections.abc.Iterable[global___Message] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["messages", b"messages", "worker_name", b"worker_name"]) -> None: ...

global___ChatCompletionRequest = ChatCompletionRequest

@typing_extensions.final
class ChatCompletionResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    TEXT_FIELD_NUMBER: builtins.int
    text: builtins.str
    def __init__(
        self,
        *,
        text: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["text", b"text"]) -> None: ...

global___ChatCompletionResponse = ChatCompletionResponse

@typing_extensions.final
class Model(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    NAME_FIELD_NUMBER: builtins.int
    name: builtins.str
    def __init__(
        self,
        *,
        name: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["name", b"name"]) -> None: ...

global___Model = Model

@typing_extensions.final
class ListModelsResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    MODELS_FIELD_NUMBER: builtins.int
    @property
    def models(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Model]: ...
    def __init__(
        self,
        *,
        models: collections.abc.Iterable[global___Model] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["models", b"models"]) -> None: ...

global___ListModelsResponse = ListModelsResponse

@typing_extensions.final
class Worker(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    WORKER_NAME_FIELD_NUMBER: builtins.int
    STATUS_FIELD_NUMBER: builtins.int
    worker_name: builtins.str
    status: global___Status.ValueType
    def __init__(
        self,
        *,
        worker_name: builtins.str = ...,
        status: global___Status.ValueType = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["status", b"status", "worker_name", b"worker_name"]) -> None: ...

global___Worker = Worker

@typing_extensions.final
class ListWorkersResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    WORKERS_FIELD_NUMBER: builtins.int
    @property
    def workers(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___Worker]: ...
    def __init__(
        self,
        *,
        workers: collections.abc.Iterable[global___Worker] | None = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["workers", b"workers"]) -> None: ...

global___ListWorkersResponse = ListWorkersResponse

@typing_extensions.final
class CreateInferenceWorkerRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    MODEL_NAME_FIELD_NUMBER: builtins.int
    QUANTIZATION_FIELD_NUMBER: builtins.int
    WORKER_NAME_FIELD_NUMBER: builtins.int
    GPU_TYPE_FIELD_NUMBER: builtins.int
    GPU_COUNT_FIELD_NUMBER: builtins.int
    model_name: builtins.str
    quantization: builtins.str
    worker_name: builtins.str
    gpu_type: global___GpuType.ValueType
    gpu_count: builtins.int
    def __init__(
        self,
        *,
        model_name: builtins.str = ...,
        quantization: builtins.str = ...,
        worker_name: builtins.str | None = ...,
        gpu_type: global___GpuType.ValueType | None = ...,
        gpu_count: builtins.int | None = ...,
    ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal["_gpu_count", b"_gpu_count", "_gpu_type", b"_gpu_type", "_worker_name", b"_worker_name", "gpu_count", b"gpu_count", "gpu_type", b"gpu_type", "worker_name", b"worker_name"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal["_gpu_count", b"_gpu_count", "_gpu_type", b"_gpu_type", "_worker_name", b"_worker_name", "gpu_count", b"gpu_count", "gpu_type", b"gpu_type", "model_name", b"model_name", "quantization", b"quantization", "worker_name", b"worker_name"]) -> None: ...
    @typing.overload
    def WhichOneof(self, oneof_group: typing_extensions.Literal["_gpu_count", b"_gpu_count"]) -> typing_extensions.Literal["gpu_count"] | None: ...
    @typing.overload
    def WhichOneof(self, oneof_group: typing_extensions.Literal["_gpu_type", b"_gpu_type"]) -> typing_extensions.Literal["gpu_type"] | None: ...
    @typing.overload
    def WhichOneof(self, oneof_group: typing_extensions.Literal["_worker_name", b"_worker_name"]) -> typing_extensions.Literal["worker_name"] | None: ...

global___CreateInferenceWorkerRequest = CreateInferenceWorkerRequest

@typing_extensions.final
class InferenceWorker(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    WORKER_NAME_FIELD_NUMBER: builtins.int
    worker_name: builtins.str
    def __init__(
        self,
        *,
        worker_name: builtins.str = ...,
    ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal["worker_name", b"worker_name"]) -> None: ...

global___InferenceWorker = InferenceWorker
