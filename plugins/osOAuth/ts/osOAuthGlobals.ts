/// <reference path="../../includes.ts"/>

namespace OSOAuth {
  export var pluginName = 'hawtio-os-oauth';
  export var log:Logging.Logger = Logger.get(pluginName);
  // Keep this unset unless we have a token
  export var userProfile:any = null;

}
