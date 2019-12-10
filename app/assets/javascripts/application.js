// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require moment
//= require bootstrap-sprockets
//= require_tree .
//= require cocoon

// 画像投稿時の画像プレビュー
$(function(){
  $fileField = $('#file')
 
  // 選択された画像を取得し表示
  $($fileField).on('change', $fileField, function(e) {
    file = e.target.files[0]
    reader = new FileReader(),
    $preview = $("#upload_image");
 
    reader.onload = (function(file) {
      return function(e) {
        $preview.empty();
        $preview.append($('<img>').attr({
          src: e.target.result,
          height: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
});


$(function(){
  // var calenderHTML = "";
  $('#calendar').fullCalendar({
     header:{
      left:"prev,today,next", //ヘッダー左側
      center: 'title', //ヘッダー中央
      right: 'month,agendaWeek,agendaDay' //ヘッダー右側
      },

        dayClick: function(date, jsEvent, view){
          // カレンダー空白部分クリック時イベント
          // $('#reservation-day-input').show();

          // カレンダーを選択した日付が入るように設定
          $('#open_day_start_time_1i').val(date.format( "YYYY" ));
          $('#open_day_start_time_2i').val(Number(date.format("MM")));
          $('#open_day_start_time_3i').val(Number(date.format( "DD" )));
          $('#open_day_start_time_4i').val("09");
          $('#open_day_start_time_5i').val("00");
          $('#open_day_end_time_1i').val(date.format( "YYYY" )).to_s;
          $('#open_day_end_time_2i').val(Number(date.format( "MM" )));
          $('#open_day_end_time_3i').val(Number(date.format( "DD" )));
          $('#open_day_end_time_4i').val("17");
          $('#open_day_end_time_5i').val("00");

          // calenderHTML = $('#reservation-day-input')[0].innerHTML;
          // console.log(calenderHTML)
          // alert('Clicked on: ' + date.format( 'YYYY/MM/DD' ));
        }


  });
});


