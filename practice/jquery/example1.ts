/// <reference path="./node_modules/@types/jquery/index.d.ts" />

// declare var $:any;

// <reference path="lib/jquery.d.ts" />

module Nec.FirstModule {
    export class Handler {
        static DisplayDate(): void {
            var currentDate:Date = new Date();
            $('#txtDemo').text(currentDate.toUTCString());
        }
    }
}

$('#btnGo').click(Nec.FirstModule.Handler.DisplayDate);