import {FacebookEmailLogin} from "./classes/FacebookEmailLogin";
/**
 * Created by colinleung on 22/2/2017.
 */
/// <reference path="../../ts/typings/globals/jquery/index.d.ts"/>
/// <reference path="../../ts/typings/globals/fb/index.d.ts"/>
/// <reference path="../../ts/typings/globals/hammerjs/index.d.ts"/>

///<amd-dependency path="jquery" />
///<amd-dependency path="hammerjs" />

export class Main{
  constructor(){
    new FacebookEmailLogin();
  }
}