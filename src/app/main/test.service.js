(function() {
    'use strict';

    angular
        .module('training')
        .service('apiData', api)
        .provider('BackendConfig', BackendConfig)
        .filter('divideAt2', divideAt2)
        .filter('allowOnlyFlorin', allowOnlyFlorin)
    ;


    function BackendConfig() {
        var configData;

        return {

            $get: function ($http, $log) {

                $http.get('http://localhost:7878/second').then(function (backendData) {
                    configData = backendData.data;
                    $log.debug('I got config data', configData);
                }, function () {

                });

                return {
                    getConfig: function (key) {
                        return configData[key] || null;
                    }
                };
            }
        };
    }

    function allowOnlyFlorin() {
        return function (input) {

            var newArray = [];

            input.forEach(function (row) {
                if(row.name.indexOf('florin')>=0){
                    newArray.push(row);
                }
            });


            return newArray;
        }
    }

    function divideAt2() {
        return function (input) {
            return parseFloat(input) / 2;
        }
    }

    function api($http, $log) {
        var service = {
            getData: function (url) {
                return $http.get('http://localhost:7878/'+url).then(function (success) {
                    $log.debug('in service:', success);
                    try {
                        ///return success.data;

                        return $http.get('http://localhost:7878/nested/ace').then(function (success2) {
                            $log.debug('in service:', success);
                            try {

                                var finalData = success.data;
                                success2.data.forEach(function (row) {
                                    finalData.push(row);
                                });

                                return finalData;

                            } catch (e) {
                                return [];
                            }
                        }, function (failure) {
                            return [];
                        });
                    } catch (e) {
                        return [];
                    }
                }, function (failure) {
                    return [];
                })
            },
            sendData: sendToServer
        };

        return service;


        function sendToServer(url, newData) {
            return $http.post('http://localhost:7878/'+url, newData).then(function (success) {
                $log.debug('post success', success);
            }, function (failure) {
                $log.error('post error', failure);
            })
        }

    }

})();