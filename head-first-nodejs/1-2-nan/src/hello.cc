#include <nan.h>

using namespace v8;

NAN_METHOD(Method) {
  NanScope();
  NanReturnValue(NanNew("Hello world"));
}

void Init(Handle<Object> exports) {
  exports->Set(NanNew("sayHello"), NanNew<FunctionTemplate>(Method)->GetFunction());
}

NODE_MODULE(hello, Init)