angular.module('demoApp', ['ngTouch']).controller('MainCtrl', function($scope, $http) {
  $scope.list = [];
  $scope.canLoad = true;
  $scope.maxItems = 18;
  list = [
    {
      "danamic": [
        {
          "protrait":"./images/editor-01.png",
          "nickName":"我真的是女神经",
          "source":"北京",
          "time":"2015-08-07 12:01:30",
          "concernNum":"666",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            }
          ],
          "info":"跟我一起念：我是女神经！我是女神经！我是女神经！重要的事情说！三！遍！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-09 12:01:20",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-02.jpg"
            }
          ],
          "info":"信不信我会一巴掌把你拍死在墙上抠都抠不出来！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-13 11:32:10",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
          ],
          "info":"我绝对不相信！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"我真的是女神经",
          "source":"北京",
          "time":"2015-08-07 12:01:30",
          "concernNum":"666",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            }
          ],
          "info":"跟我一起念：我是女神经！我是女神经！我是女神经！重要的事情说！三！遍！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-09 12:01:20",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-02.jpg"
            }
          ],
          "info":"信不信我会一巴掌把你拍死在墙上抠都抠不出来！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-13 11:32:10",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
          ],
          "info":"我绝对不相信！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"我真的是女神经",
          "source":"北京",
          "time":"2015-08-07 12:01:30",
          "concernNum":"666",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            }
          ],
          "info":"跟我一起念：我是女神经！我是女神经！我是女神经！重要的事情说！三！遍！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-09 12:01:20",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-02.jpg"
            }
          ],
          "info":"信不信我会一巴掌把你拍死在墙上抠都抠不出来！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-13 11:32:10",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
          ],
          "info":"我绝对不相信！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"我真的是女神经",
          "source":"北京",
          "time":"2015-08-07 12:01:30",
          "concernNum":"666",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            }
          ],
          "info":"跟我一起念：我是女神经！我是女神经！我是女神经！重要的事情说！三！遍！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-09 12:01:20",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-02.jpg"
            }
          ],
          "info":"信不信我会一巴掌把你拍死在墙上抠都抠不出来！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-13 11:32:10",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
          ],
          "info":"我绝对不相信！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"我真的是女神经",
          "source":"北京",
          "time":"2015-08-07 12:01:30",
          "concernNum":"666",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            }
          ],
          "info":"跟我一起念：我是女神经！我是女神经！我是女神经！重要的事情说！三！遍！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-09 12:01:20",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-02.jpg"
            }
          ],
          "info":"信不信我会一巴掌把你拍死在墙上抠都抠不出来！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-13 11:32:10",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
          ],
          "info":"我绝对不相信！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"我真的是女神经",
          "source":"北京",
          "time":"2015-08-07 12:01:30",
          "concernNum":"666",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            },
            {
              "imgSrc":"./images/dynamic-01.jpg"
            }
          ],
          "info":"跟我一起念：我是女神经！我是女神经！我是女神经！重要的事情说！三！遍！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-09 12:01:20",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
            {
              "imgSrc":"./images/dynamic-02.jpg"
            }
          ],
          "info":"信不信我会一巴掌把你拍死在墙上抠都抠不出来！！！！！！！！"
        },
        {
          "protrait":"./images/editor-01.png",
          "nickName":"嘻嘻嘻嘻",
          "source":"哈哈",
          "time":"2015-08-13 11:32:10",
          "concernNum":"333",
          "concernState":"1",
          "concern":"true",
          "pic":[
          ],
          "info":"我绝对不相信！！！！！！！！"
        }
      ]
    }
  ]
  $scope.addItems = function() {
    list.forEach(function(item) {
      var i = 0;
      while (i < 5) {
        $scope.list.push(item.danamic[i]);
        if ($scope.list.length >= $scope.maxItems) {
          $scope.canLoad = false;
          return;
        }
        i++;
      }
    });
  };
  $scope.addItems();

  $scope.showSixPic = function(a) {
    if (a.length === 6) {
      return true;
    }
  };

  $scope.showForePic = function(a) {
    if (a.length === 4) {
      return true;
    }
  };

  $scope.showOnePic = function(a) {
    if (a.length === 1) {
      return true;
    }
  };

  $scope.showZeroPic = function(a) {
    if (a.length === 0) {
      return true;
    }
  };
})
.directive('infiniteScroll', [
  '$window', function($window) {
    return {
      link: function(scope, element, attrs) {
        var e, offset;
        offset = parseInt(attrs.threshold) || 0;
        e = element[0];
        element.bind('scroll', function() {
          if (scope.$eval(attrs.canLoad) && e.scrollTop + e.offsetHeight >= e.scrollHeight - offset) {
            scope.$apply(attrs.infiniteScroll);
          }
        });
      }
    };
  }
]);