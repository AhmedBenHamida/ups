var BankApp = angular.module('BankApp');

BankApp.controller('ModalCancelController', [
  '$scope', '$element', 'close', 'cancelcontent','btncancel','btnok',
    function ($scope, $element, close, cancelcontent, btncancel, btnok) {
        $scope.cancelcontent = cancelcontent;
        $scope.btncancel = btncancel;
        $scope.btnok = btnok;

        $scope.cancel = function ($event) {
            $scope.pin = {};
            $scope.pin.action = "cancel";
            $scope.pin.value = "USER_CHOICE";
            $("#pin").val(angular.toJson($scope.pin, true));
            $scope.myEl = angular.element(document.querySelector('#enterPIN'));
            $scope.myElchk = angular.element(document.querySelector('#disclaimer'));
            $scope.myEl.removeAttr('required');
            $scope.myElchk.removeAttr('required');
             /*
            Uncomment the following line if you need to enable product cancel feature.
            */
            //$("#cancelHit").val("%#*@NO_PASSWORD_@*#%");
            $event.stopPropagation();
            $element.modal('hide');
            close({
                cancelcontentres: $scope.pin
            }, 500);
        };

        $scope.close = function () {
            $element.modal('hide');
        };
}]);