function getCurrentDate(myDate) {

//    var myDate = new Date();

      var year = myDate.getFullYear(); //年

      var month = myDate.getMonth() + 1; //月

      var day = myDate.getDate(); //日

      var days = myDate.getDay();

      switch(days) {

            case 1:

                  days = '星期一';

                  break;

            case 2:

                  days = '星期二';

                  break;

            case 3:

                  days = '星期三';

                  break;

            case 4:

                  days = '星期四';

                  break;

            case 5:

                  days = '星期五';

                  break;

            case 6:

                  days = '星期六';

                  break;

            case 0:

                  days = '星期日';

                  break;



      }

//    var str = year + "年" + month + "月" + day + "日  " + days;
       var str = month + "月" + day + "日  " + days;
      return str;

}