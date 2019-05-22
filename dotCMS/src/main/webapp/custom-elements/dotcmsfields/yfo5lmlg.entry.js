const e=window.dotcmsFields.h;import{a as t,c as s,d as a,e as i,f as l,k as u,g as r,h as n,i as h,j as d}from"./chunk-c28f28f8.js";class o{constructor(){this.saveBtnLabel="Add",this.disabled=!1,this.values=[],this.fieldInput={key:"",value:""}}reset(){this.fieldInput={key:"",value:""},this.values=[],this.status=t(this.isValid()),this.emitStatusChange(),this.emitValueChange()}deleteItemHandler(e){e.stopImmediatePropagation(),this.values=this.values.filter((t,s)=>s!==e.detail),this.refreshStatus(),this.emitStatusChange(),this.emitValueChange()}componentWillLoad(){this.setInitialValue(),this.emitStatusChange()}hostData(){return{class:s(this.status,this.isValid(),this.required)}}render(){return e(a,null,i({name:this.name,label:this.label,required:this.required}),e("input",{class:l(this.status.dotValid),disabled:this.isDisabled(),id:u(this.name),name:"key",onInput:e=>this.setValue(e),placeholder:this.keyPlaceholder,type:"text",value:this.fieldInput.key}),e("input",{class:l(this.status.dotValid),disabled:this.isDisabled(),name:"value",onInput:e=>this.setValue(e),placeholder:this.valuePlaceholder,type:"text",value:this.fieldInput.value}),e("button",{class:"dot-key-value__save__button",type:"button",disabled:this.disabled||null,onClick:()=>this.addKey()},this.saveBtnLabel),this.getKeyValueList(),r(this.hint),n(this.showErrorMessage(),this.getErrorMessage()))}isDisabled(){return this.disabled||null}getKeyValueList(){return this.values.length?e("key-value-table",{items:this.values,disabled:this.disabled}):""}setInitialValue(){this.values=this.value?this.value.split(",").filter(e=>e.length>0).map(e=>{const[t,s]=e.split("|");return{key:t,value:s}}):[],this.status=t(this.isValid())}isValid(){return!(this.required&&!this.values.length)}showErrorMessage(){return this.getErrorMessage()&&!this.status.dotPristine}getErrorMessage(){return this.isValid()?"":this.requiredMessage}setValue(e){this.fieldInput[e.target.name]=e.target.value.toString()}refreshStatus(){this.status=h(this.status,{dotTouched:!0,dotPristine:!1,dotValid:this.isValid()})}emitStatusChange(){this.statusChange.emit({name:this.name,status:this.status})}emitValueChange(){const e=d(this.values);this.valueChange.emit({name:this.name,value:e,fieldType:this.fieldType})}addKey(){this.fieldInput.key&&this.fieldInput.value&&(this.values=[...this.values,{key:this.fieldInput.key,value:this.fieldInput.value}],this.refreshStatus(),this.emitStatusChange(),this.emitValueChange())}static get is(){return"dot-key-value"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},fieldType:{type:String,attr:"field-type"},hint:{type:String,attr:"hint"},keyPlaceholder:{type:String,attr:"key-placeholder"},label:{type:String,attr:"label"},name:{type:String,attr:"name"},required:{type:Boolean,attr:"required"},requiredMessage:{type:String,attr:"required-message"},reset:{method:!0},saveBtnLabel:{type:String,attr:"save-btn-label"},status:{state:!0},value:{type:String,attr:"value",mutable:!0},valuePlaceholder:{type:String,attr:"value-placeholder"},values:{state:!0}}}static get events(){return[{name:"valueChange",method:"valueChange",bubbles:!0,cancelable:!0,composed:!0},{name:"statusChange",method:"statusChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"deleteItemEvt",method:"deleteItemHandler"}]}static get style(){return""}}class m{constructor(){this.items=[],this.disabled=!1}render(){return e("table",null,e("tbody",null,this.items.map((t,s)=>e("tr",null,e("td",null,e("button",{type:"button",id:`${t.key}_${t.value}_${s}`,disabled:this.disabled||null,onClick:()=>this.deleteItem(s),class:"dot-key-value__delete__button"},i({name:`${t.key}_${t.value}_${s}`,label:"Delete",required:!1}))),e("td",null,t.key),e("td",null,t.value)))))}deleteItem(e){this.deleteItemEvt.emit(e)}static get is(){return"key-value-table"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},items:{type:"Any",attr:"items"}}}static get events(){return[{name:"deleteItemEvt",method:"deleteItemEvt",bubbles:!0,cancelable:!0,composed:!0}]}}export{o as DotKeyValue,m as KeyValueTable};