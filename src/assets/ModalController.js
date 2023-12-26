var BankApp = angular.module('BankApp');

BankApp.controller('ModalController', [
  '$scope', '$element', 'title', 'close', 'arraylist', 'jsonobj',
  function ($scope, $element, title, close, arraylist, jsonobj) {
        $scope.name = null;

        $scope.title = title;
        $scope.arraylist = arraylist;
        $scope.jsonobj = jsonobj;
        $scope.countselectarray = [];
        var mobilechannelsize = 0;
        var emailchannelsize = 0;
        for (i = 0; $scope.jsonobj.channel.length > i; i++) {

            if ($scope.jsonobj['channel'][i]['type'] === 'MOBILE') {
                mobilechannelsize = mobilechannelsize + 1;
            } else if ($scope.jsonobj['channel'][i]['type'] === 'EMAIL') {
                emailchannelsize = emailchannelsize + 1;
            }
        }


        $scope.mobiledevices = mobilechannelsize;
        $scope.emaildevices = emailchannelsize;
        $scope.toggleObjSelection = function ($event, description) {
            $event.stopPropagation();
        };
        $scope.updateSelection = function ($event, channel) {
            $event.stopPropagation();
            //console.log('updateSelection clicked');
            for (i = 0; $scope.jsonobj.channel.length > i; i++) {
                if ($scope.jsonobj['channel'][i]['id'] === channel.id) {
                    if ($scope.jsonobj['channel'][i]['selected']) {
                        $scope.jsonobj["channel"][i]['selected'] = false;
                    } else {
                        $scope.jsonobj["channel"][i]['selected'] = true;
                    }
                }
            }
            return false;
        };

        $scope.getNumberOfSelectChannel = function () {
            var selectedChannes = 0;
            for (i = 0; $scope.jsonobj.channel.length > i; i++) {

                if ($scope.jsonobj['channel'][i]['selected'] === true) {
                    selectedChannes = selectedChannes + 1;
                }
            }
            return selectedChannes;
        };

        $scope.close = function () {
            close({
                selectedchannel: $scope.getNumberOfSelectChannel()
            }, 500);
        };
      
        $scope.cancel = function () {
            $element.modal('hide');
            close({
                banksoptgroupdetails: $scope.banksoptgroupdetails
            }, 500);
        };


}]);