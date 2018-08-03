import { Injectable } from '@angular/core';
var BrDateHelper = (function () {
    function BrDateHelper() {
    }
    BrDateHelper.prototype.add = function (days, months, years) {
        var date = new Date();
        date = new Date(date.setDate(date.getDate() + days));
        date = new Date(date.setMonth(date.getMonth() + months));
        date = new Date(date.setFullYear(date.getFullYear() + years));
        return this.formatDate(date);
    };
    BrDateHelper.prototype.yesterday = function () {
        var date = new Date();
        date = new Date(date.setDate(date.getDate() - 1));
        return this.formatDate(date);
    };
    BrDateHelper.prototype.today = function () {
        var date = new Date();
        return this.formatDate(date);
    };
    BrDateHelper.prototype.tomorrow = function () {
        var date = new Date();
        date = new Date(date.setDate(date.getDate() + 1));
        return this.formatDate(date);
    };
    BrDateHelper.prototype.dateDiff = function (greaterDate, lesserDate) {
        var ma = this.parseDate(greaterDate);
        var me = this.parseDate(lesserDate);
        var ret = {
            'years': ma.getFullYear() - me.getFullYear() > 0 ? ma.getFullYear() - me.getFullYear() : 0,
            'months': ma.getMonth() - me.getMonth() >= 0 ? ma.getMonth() - me.getMonth() : ma.getMonth() - me.getMonth() + 12,
            'days': ma.getDate() - me.getDate() >= 0 ? ma.getDate() - me.getDate() : ma.getDate() - me.getDate() + this.serializeNegativeDays(me.getMonth() + 1)
        };
        if (ma.getMonth() < me.getMonth())
            ret.years -= 1;
        else if (ma.getMonth() == me.getMonth())
            if (ma.getDate() < me.getDate())
                ret.years -= 1;
        if (ma.getMonth() > me.getMonth())
            if (ma.getDate() < me.getDate())
                ret.months -= 1;
        return ret;
    };
    BrDateHelper.prototype.formatDate = function (date) {
        var ret = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
        ret += "/";
        ret += date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
        ret += "/";
        ret += date.getFullYear();
        return ret;
    };
    BrDateHelper.prototype.parseDate = function (date) {
        var dia = Number.parseInt(date.split("/")[0]);
        var mes = Number.parseInt(date.split("/")[1]) - 1;
        var ano = Number.parseInt(date.split("/")[2]);
        var ret = new Date(ano, mes, dia);
        return ret;
    };
    BrDateHelper.prototype.serializeNegativeDays = function (month) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 2:
                return 28;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
        }
    };
    BrDateHelper.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BrDateHelper.ctorParameters = function () { return []; };
    return BrDateHelper;
}());
export { BrDateHelper };
//# sourceMappingURL=br-date-helper.js.map