var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': 'W1', 'text': '創建網站: \n 到 https://github.com/mdecourse/cmstemplate \n 按下 \n 創建新倉儲 cd2021 \n 打開小黑窗 \n cd tmp \n git clone --recurse-submodules 倉儲網址.git \n \n 打開網站: \n cd tmp/cd2021/cmsimde \n python wsgi.py \n 在網址欄打上localhost:9443 \n \n 編輯網站後: \n 按下右上角的generate_pages \n cd tmp/cd2021 \n git add . \n git commit -m"名字" \n git push \n', 'tags': '', 'url': 'W1.html'}, {'title': 'ssh', 'text': '開啟小黑窗輸入 \n sh \n ssh-keygen -t rsa -b 4096 -C "40823104"\xa0 (" "內為學號) \n 在以下路徑(/y/home/.ssh/id_rsa)生成鑰匙及檔案 \n 設定密碼(不須密碼直接enter) \n 產生成功 \n \n \n 在小白窗開啟 增加set GIT_SSH=%Disk%:\\putty\\plink.exe然後儲存 \n \n 開啟puttygen.exe 按下load \n \n 選擇剛才建的id_rsa \n \n 按下safe public key \n \n 存成檔案 學號.ppk \n 開啟檔案putty.exe \n 在host name中輸入github.com \n 選擇下方github.com點選load \n \n 旁邊分支線中選擇ssh下面的auth \n 按browse選擇剛才的ppk檔案 \n \n 然後回到session按下save \n 接著到github的setting中增加ssh key即成功 \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'site404', 'text': '打開github倉儲設定 \n \n 往下滑找到github page裡面的source \n none改成main或master,資料夾為root,然後save \n \n \n', 'tags': '', 'url': 'site404.html'}, {'title': 'leo', 'text': '小黑窗輸入leo即可開啟leo視窗 \n \n \n 更改作者名稱及網站名 \n \n 更改blog網址 \n \n \n 修改網誌內容 \n \n \n \n \n 儲存leo更改內容(push) \n \n', 'tags': '', 'url': 'leo.html'}, {'title': 'Stage1', 'text': '題目:挖土機手臂 \n 小組網站: https://40823104.github.io/stage1-ag4/content/index.html \n 組員網站: https://40823101.github.io/cd2021/content/index.html \n', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W2', 'text': '今天確認主題為挖土機手臂結構， \n 動機為想 研究挖土機手臂構造及作動原理， \n 本周從AUTOCAD開始繪製2D圖檔，再利用SOLIDWORK繪製3D圖， \n 預計下周用 CoppeliaSim模擬測試及修改。 \n 參考資料: \n https://kknews.cc/zh-tw/news/nbx58m5.html \n 立體圖繪製影片: \n \n \n \n \n \n \n 立體組合圖影片: \n \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '將挖土機手臂的組合圖stl檔以coppeliasim作動測試 \n \xa0(發現soildwork的組合圖轉為stl檔後會自動拆開,變成一個個零件stl檔,後來改成匯出成step檔後放入inventor,再轉成stl檔即可為完整的組合圖) \n 測試影片1:將組合件建立從屬關係,並在三個主動軸上添加虛擬軸,結果失敗,各零件四散 \n 結果1:失敗,各零件四散,疑似從屬關係不順 \n \n \n 測試影片2:重新建立組合件之從屬關係,並在各軸上增加虛擬軸以加強物件之間的約束 \n 結果2: 失敗,各零件四散,虛擬軸似乎和物件拘束關係無關 \n \n \n 測試影片3:以手動方式轉動虛擬軸 \n 結果3:失敗, 疑似因為我們的主題挖土機手臂需要多個零件互相約束,但coppeliasim只能以一個主動件配合多個從動件,無法讓一個零件既是主動件也是從動件,所以用程式作動時會出現零件約束不足,因此無法順利作動並且零件四散 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '上台報告 \n PDF: https://40823104.github.io/stage1-ag4/downloads/%E5%8D%94%E5%90%8C%E7%94%A2%E5%93%81%E8%A8%AD%E8%A8%88%E8%88%87%E5%AF%A6%E7%BF%92.pdf \n reveal: https://40823104.github.io/stage1-ag4/reveal/index.html \n 影片: \n \n 各組影片名稱更名及長度 \n https://drive.google.com/drive/folders/1n4L-tWhAaJEzP7O9FdyERihYsy7aEJ07?usp=sharing \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'Stage2', 'text': '題目: 腳踏車 \n 組員網站:林晏鈴: https://40823101.github.io/cd2021/content/index.html \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0林郁凱: https://40823119.github.io/cd2021/content/index.html \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0蘇鷺瑋: https://40823150.github.io/cd2021/content/index.html \n 小組網站: https://40823101.github.io/stage2-ag4/content/index.html \n \n', 'tags': '', 'url': 'Stage2.html'}, {'title': 'W5', 'text': '暫定題目:腳踏車 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '繪製2D圖抓大概尺寸 \n 檔案連結: https://drive.google.com/drive/folders/19oOTUK06qoGMvMf67qVqm9LB-Mh0Vkea?usp=sharing \n 因為用 CoppeliaSim模擬鍊條太過費時,因此將鍊條拿掉 \n 直接以齒輪傳動 \n \n \n \n 參考腳踏車: \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '繪製立體圖並組合,交給負責 CoppeliaSim的組員 \n 檔案連結: https://drive.google.com/drive/folders/19oOTUK06qoGMvMf67qVqm9LB-Mh0Vkea?usp=sharing \n \n \n 影片: \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '利用coppliasim製作模擬 \n 1.第一次模擬發現輪子和齒輪會直接掉落，經過從以前學長的影片和講解我們發現是基準面的問題 \n 2.所以我們增加了基準面，就有了第二個模擬 \n \n 3.，將踏板個後齒輪和後輪連結在一起，最後我們本來要進行實體碰撞，但是，發現我們進行實體碰撞之後齒輪方面會卡齒，我們更換了間隔更大的齒輪發現無法解決問題，導致自行車會散架，我們也無從到學長的影片和講解中得到解釋，所以我們的實體實驗失敗了 \n 心得: \n 在這次大家的合作中，我們都能發揮處各位的特長，取其精華，同時組內氛圍良好，沒有出現爭吵，大家都按照自己應該做的事情好好完成，雖然結果沒有到達自己滿意的程度，但是我們都還是很滿足於過程，大家的討論和配合，非常體現出小組合作的重要性與，也能感受到，小組合作在自己不擅長的地方有其他組員的彌補變得更加方便和簡單，大家也能發揮自己擅長的地方去配合，這是一次很好的經歷和磨練！！ \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '上台報告 \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'Stage3', 'text': '題目:機械停車塔 \n 組員: \n 40823101   40823102   40823104   40823106   40823151   40623121   40871106 \n 小組網站: https://40823104.github.io/stage3-ag2/content/index.html \n', 'tags': '', 'url': 'Stage3.html'}, {'title': '先前負責項目', 'text': 'Stage1-ag4:( CoppeliaSim部分) 提出構想並參與討論,零組件轉檔,機電系統模擬與控制,參與專案報告編寫 \n Stage2-ag4:(繪圖部分) 提出構想並參與討論,文獻搜尋,參數式零組件繪圖,零組件轉檔,參與專案報告編寫 \n', 'tags': '', 'url': '先前負責項目.html'}, {'title': '小組作業心得', 'text': 'W11:組員增加到八人,想法也會有八種,但相信經過討論後,我們能找到最好的合作方式,同心協力完成最後的分組作業 \n W12:這周開始構思我們決定的主題:停車塔,開始設計後才發現由於軟體的限制有很多想法無法執行,這時候與負責程式模擬的組員間溝通很重要 \n W13: 利用視訊課程將自己畫好的圖與同學討論 \n W14:開始嘗試理解 CoppeliaSim的程式,組員增加後能參考的資料也變多了 \n W15: \n', 'tags': '', 'url': '小組作業心得.html'}, {'title': 'W10', 'text': '建造分組同步倉儲及網頁 \n 創建分組倉儲:Stage3-ag2 \n 小黑窗輸入:git clone --recurse-submodules  https://github.com/學號/倉儲名稱.git \n 進入倉儲資料夾的.git/config增加組員資訊及改成ssh \n \n \n 之後每次開啟小組網頁編輯前要先git pull(抓下其他人的更新內容) \n 更新完之後先正常的git push一次(這是更新自己的倉儲) \n 再git push 組員學號(每一個人都要更新到,不然會亂掉) \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '討論小組偕同主題及協助組員完成小組網頁 \n 最後討論出的主題為機械停車塔 \n \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': 'task1 \n 讀取   stage3_2a.txt , 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結. \n 老師的範例 : \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n \n \n \n # open file, default is read mode, since txt content no chinese char \n # no encoding = "UTF-8" is needed \n with  open ( "stage3_2a.txt" ) as fh: \n   # readlines will read into the whole line and put into list format \n   # has \\n at the end of each line \n   data  =   fh.readlines() \n #print(len(data)) \n for   i  in   range ( len (data)): \n   group  =   data[i].rstrip( "\\n" ).split( "\\t" ) \n   print (group) \n # the following will use group data to generate needed html \n \n \n \n \n \n \n \n 第一版 :將學號按組別排好 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n \n \n \n with  open ( "stage3_2a.txt" ) as fh: \n   #先將我們存起來stage3_2a.txt打開並命名為fh \n   data  =   fh.readlines() \n   #將stage3_2a.txt的資料以串列形式存為data \n for   i  in   range ( len (data)): \n   group  =   data[i].rstrip( "\\n" ).split( "\\t" ) \n   #先取出data list中的第i項,消除元素中/n,再以\\t取出需要的文字 \n   print (group[ 0 ] + \'|\' + group[ 0 ]) \n   #先將group第0列推出 \n   for   j  in   range ( 1 , 18 , 1 ): \n   #設一個範圍,(1到18,每次加1,1<=j<18) \n   try : \n   print (group[j]) \n   except : \n   continue \n   #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑 \n \n \n \n \n \n \n \n 第二版 :將40823122的學號修正 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n with  open ( "stage3_2a.txt" ) as fh: \n   #先將我們存起來stage3_2a.txt打開並命名為fh \n   data  =   fh.readlines() \n   #將stage3_2a.txt的資料以串列形式存為data \n for   i  in   range ( len (data)): \n   newdata  =   data[i].replace( \'4823122\' , \'40823122\' ) \n   #因為40823122的學號打錯了,所以用 replace 把舊的替換成新的 \n   group  =   newdata.rstrip( "\\n" ).split( "\\t" ) \n   #先取出newdata list中的第i項,消除元素中/n,再以\\t取出需要的文字 \n   print (group[ 0 ] + \'|\' + group[ 0 ]) \n   #先將group第0列推出 \n   for   j  in   range ( 1 , 18 , 1 ): \n   #設一個範圍,(1到18,每次加1,1<=j<18) \n   try : \n   print (group[j]) \n   except : \n   continue \n   #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑 \n \n \n \n \n \n \n \n 第三版 :以網頁的形式推出,但會告知 \n print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/\'+group[0]+\'">Website</a> | <a href="https://github.com/\'+group[2]+\'/\'+group[0]+\'">Repository</a></p>\') IndexError: list index out of range \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n \n \n \n with  open ( "stage3_2a.txt" ) as fh: \n   #先將我們存起來stage3_2a.txt打開並命名為fh \n   data  =   fh.readlines() \n   #將stage3_2a.txt的資料以串列形式存為data \n for   i  in   range ( len (data)): \n   newdata  =   data[i].replace( \'4823122\' , \'40823122\' ) \n   #因為40823122的學號打錯了,所以用 replace 把舊的替換成新的 \n   group  =   newdata.rstrip( "\\n" ).split( "\\t" ) \n   #先取出newdata list中的第i項,消除元素中/n,再以\\t取出需要的文字 \n   print ( \'<p>\' + group[ 0 ] + \' | <a href="https://\' + group[ 1 ] + \'.github.io/\' + group[ 0 ] + \'">Website</a> | <a href="https://github.com/\' + group[ 2 ] + \'/\' + group[ 0 ] + \'">Repository</a></p>\' ) \n   for   j  in   range ( 1 , 18 , 2 ): \n   #設一個範圍,(1到18,每次+2,1<=j<18) \n   try : \n   print ( \'<p>\' + group[j] + \' | Website:\' + \'<a href="https://\' + group[j] + \'.github.io/cd2021\' + \'">\' + group[j] + \'</a>\' + \' | Repository:\' + \'<a href="https://github.com/\' + group[j] + \'/cd2021\' + \'">\' + group[j] + \'</a> </p>\' ) \n   except : \n   continue \n   #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑 \n \n \n \n \n \n \n \n 第四版 :將a40823112和stage3_ag修正 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n with  open ( "stage3_2a.txt" ) as fh: \n   #先將我們存起來stage3_2a.txt打開並命名為fh \n   data  =   fh.readlines() \n   #將stage3_2a.txt的資料以串列形式存為data \n for   i  in   range ( 6 ): \n   #將次數限定就不會告知list index out of range了 \n   newdata1  =   data[i].replace( \'4823122\' , \'40823122\' ) \n   #因為40823122的學號打錯了,所以用 replace 把舊的替換成新的 \n   newdata2  =   newdata1.replace( \'\\t\\t\' ,\'\') \n   #因為有一組只有6人,所以用 replace 把空位刪除 \n   newdata3  =   newdata2.replace( \'_\' , \'-\' ) \n   #因為在編輯txt的時候-會變成_,所以用 replace 把_修正為- \n   group  =   newdata3.rstrip( "\\n" ).split( "\\t" ) \n   #先取出newdata list中的第i項,消除元素中/n,再以\\t取出需要的文字 \n   print ( \'<p>\' + group[ 0 ] + \' | <a href="https://\' + group[ 1 ] + \'.github.io/\' + group[ 0 ] + \'">Website</a> | <a href="https://github.com/\' + group[ 2 ] + \'/\' + group[ 0 ] + \'">Repository</a></p>\' ) \n   for   j  in   range ( 1 , 18 , 2 ): \n   #設一個範圍,(1到18,每次+2,1<=j<18) \n   try : \n   n  =   group[j].replace( \'40823112\' , \'a40823112\' ) \n   #因為40823112的github帳號是a40823112,所以用 replace 把帳號修正 \n   print ( \'<p>\' + group[j] + \' | Website:\' + \'<a href="https://\' + n + \'.github.io/cd2021\' + \'">\' + group[j] + \'</a>\' + \' | Repository:\' + \'<a href="https://github.com/\' + n + \'/cd2021\' + \'">\' + group[j] + \'</a> </p>\' ) \n   except : \n   continue \n   #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑 \n \n \n \n \n \n \n \n 第五版 :將連結以老師常用的形式推出 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n with  open ( "stage3_2a.txt" ) as fh: \n   #先將我們存起來stage3_2a.txt打開並命名為fh \n   data  =   fh.readlines() \n   #將stage3_2a.txt的資料以串列形式存為data \n for   i  in   range ( 6 ): \n   #將次數限定就不會告知list index out of range了 \n   newdata1  =   data[i].replace( \'4823122\' , \'40823122\' ) \n   #因為40823122的學號打錯了,所以用 replace 把舊的替換成新的 \n   newdata2  =   newdata1.replace( \'\\t\\t\' ,\'\') \n   #因為有一組只有6人,所以用 replace 把空位刪除 \n   newdata3  =   newdata2.replace( \'_\' , \'-\' ) \n   #因為在編輯txt的時候-會變成_,所以用 replace 把_修正為- \n   group  =   newdata3.rstrip( "\\n" ).split( "\\t" ) \n   #先取出newdata list中的第i項,消除元素中/n,再以\\t取出需要的文字 \n   print ( \'<p><a href="https://github.com/\' + group[ 1 ] + \'/\' + group[ 0 ] + \'">\' + group[ 0 ] + \' repo</a> | <a href="https://\' + group[ 2 ] + \'.github.io/\' + group[ 0 ] + \'">\' + group[ 0 ] + \' site</a></p>\' ) \n   for   j  in   range ( 1 , 18 , 2 ): \n   #設一個範圍,(1到18,每次+2,1<=j<18) \n   try : \n   n  =   group[j].replace( \'40823112\' , \'a40823112\' ) \n   #因為40823112的github帳號是a40823112,所以用 replace 把帳號修正 \n   print ( \'<p>\' + \'<a href="https://github.com/\' + n + \'/cd2021">\' + group[j] + \' repo</a> | <a href="https://\' + n + \'.github.io/cd2021">\' + group[j] + \' site</a></p>\' ) \n   except : \n   continue \n   #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑 \n \n \n \n \n \n \n \n 參考資料: \n python 語法 renge \n python 基本語法 \n python loop 原理 \n result \n stage3-ag1 repo  |  stage3-ag1 site \n 40823131 repo  |  40823131 site \n 40823112 repo  |  40823112 site \n 40823123 repo  |  40823123 site \n 40823145 repo  |  40823145 site \n 40823136 repo  |  40823136 site \n 40823109 repo  |  40823109 site \n 40823116 repo  |  40823116 site \n 40823108 repo  |  40823108 site \n stage3-ag2 repo  |  stage3-ag2 site \n 40823151 repo  |  40823151 site \n 40623121 repo  |  40623121 site \n 40871106 repo  |  40871106 site \n 40823102 repo  |  40823102 site \n 40823104 repo  |  40823104 site \n 40823106 repo  |  40823106 site \n 40823101 repo  |  40823101 site \n 40823132 repo  |  40823132 site \n stage3-ag3 repo  |  stage3-ag3 site \n 40823119 repo  |  40823119 site \n 40823150 repo  |  40823150 site \n 40823103 repo  |  40823103 site \n 40823107 repo  |  40823107 site \n 40523252 repo  |  40523252 site \n 40823154 repo  |  40823154 site \n stage3-ag4 repo  |  stage3-ag4 site \n 40823142 repo  |  40823142 site \n 40823144 repo  |  40823144 site \n 40823127 repo  |  40823127 site \n 40823148 repo  |  40823148 site \n 40823121 repo  |  40823121 site \n 40823135 repo  |  40823135 site \n 40823114 repo  |  40823114 site \n 40823146 repo  |  40823146 site \n stage3-ag5 repo  |  stage3-ag5 site \n 40823111 repo  |  40823111 site \n 40823115 repo  |  40823115 site \n 40823128 repo  |  40823128 site \n 40823120 repo  |  40823120 site \n 40823140 repo  |  40823140 site \n 40823124 repo  |  40823124 site \n 40823139 repo  |  40823139 site \n 40823126 repo  |  40823126 site \n stage3-ag6 repo  |  stage3-ag6 site \n 40823152 repo  |  40823152 site \n 40823110 repo  |  40823110 site \n 40823122 repo  |  40823122 site \n 40823125 repo  |  40823125 site \n 40823117 repo  |  40823117 site \n 40823129 repo  |  40823129 site \n 40823149 repo  |  40823149 site \n 40823153 repo  |  40823153 site \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '上交繪圖組各自設計的停車塔: https://drive.google.com/drive/folders/1CZmrbdyc5jYDIqu6yVmPFS50epqYsZYO?usp=sharing \n 我設計的停車塔組裝影片: \n \n 小組開會討論: \n 最後結論:以劉怡萱的設計為主 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '建立gitlab \n 1.以gitlab sign up搜尋 選gitLab.com account \n \n 2.建立帳號(username:學號) \n 3.建立ssh key(方法和github一樣) \n \xa0 - 打開puttygen.exe \n \xa0 -選load \n \xa0 -找到之前的ppk檔案選取 \n \xa0 -將一長串的key號碼複製到gitlab的ssh設定網頁上 \n 4. 在小白窗開啟tmp/cd2021/.git/config增加項目 \n \n 5.小黑窗編輯 \n \xa0 -cd tmp/cd2021 \n \xa0 -git remote add \n \xa0 -git push gitlab \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '1. \n 結論 : \n \xa0 \n 根據上述影片中的推導過程, 取得 q2(x, y, a1, a2) 與 q1(x, y, a1, a2, q2) 的方程式, 寫為 Lua 程式如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n \n \n \n -- The decimal point of number x is rounded to the nth place \n function   round(x, n) \n \xa0\xa0\xa0\xa0 n =  math.pow (10, n  or   0) \n \xa0\xa0\xa0\xa0 x = x * n \n \xa0\xa0\xa0\xa0 if   x >= 0  then   x =  math.floor (x + 0.5)  else   x =  math.ceil (x - 0.5)  end \n \xa0\xa0\xa0\xa0 return   x / n \n end \n \xa0 \n -- radian to degree \n deg = 180/ math.pi \n -- link 1 length \n a1 = 10 \n -- link 2 length \n a2 = 10 \n -- derivated based upon https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s \n function   ik(x, y) \n \xa0\xa0\xa0\xa0 -- (x, y) need to be located inside the circle with radius a1+a2 \n \xa0\xa0\xa0\xa0 if   (x^2 + y^2) <= (a1+ a2)^2  then \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 q2 = - math.acos ((x^2+y^2-a1^2-a2^2)/(2*a1*a2)) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 q1 =  math.atan2 (y, x) +  math.atan2 ((a2* math.sin (q2)), (a1+a2* math.cos (q2))) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   {round(q1*deg, 4), round(q2*deg, 4)} \n \xa0\xa0\xa0\xa0 else \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print ( "Over range!" ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 -- end the script execution \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 os.exit () \n \xa0\xa0\xa0\xa0 end \n end \n \xa0 \n theta = ik(15, 1) \n \xa0 \n print (theta[1], theta[2]) \n \n \n \n \n \n \n \n 1-- 數字 x 的小數點四捨五入到第 n 位 \n 9--從弧度轉為度 \n 11--link1的長度 \n 13-- link2的長度 \n 15--基於 https://www.youtube.com/watch?v=IKOGwoJ2HLk&t=311s \n 17-- (x, y) 需要位於半徑為 a1+a2 的圓內 \n 24--結束程式執行 \n \n \n 2. \n \n \n 翻譯如下: \n Here we have the same two link robot as we just looked at but this time we\'re going to solve it using an analytical approach, that is we\'re going to rely much more on algebra, particular linear algebra rather than geometry. \n 在這裡，我們有與剛才看到的相同的二連桿機構，但這次我們將使用分析方法來解決它，也就是說，我們將更多地依賴代數，特定的線性代數而不是幾何。 \n \n \xa0 We have an expression E, which is the homogeneous transformation which represents the pose of the robots endefector and we looked at this in the last lecture, we can write the endefector pose as a sequence of elementary homogeneous transformations. \n 我們有一個表達式 \xa0 E ，它是表示機械手臂位置的齊次變換，我們在上一課中看過這個，我們可以將機械手臂位置寫為一系列基本齊次變換。 \n \xa0 \n A rotation by q1, a translation along the X direction by a1, a rotation by q2 and then a translation in the X direction by a2. \n q1 旋轉，a 1 沿 x 方向平移，q 2 旋轉，然後a 2 沿 x 方向平移。 \n \xa0 \n If I expand this out, multiply all the transformations together, I get the expression shown here ; a three by three homogeneous transformation matrix representing the pose of the robot\'s endefector. \n 如果我將其展開，將所有變換相乘，就會得到此處所示的表達式；一個三乘三的齊次變換矩陣，表示機械手臂的最終位置。 \n \xa0 \n Now for this particular two link robot , we are only interested in the position of its endefector , it\'s X and Y co - ordinate and they are these two elements within the homogeneous transformation matrix , so I\'m going to copy those out . \n 現在對於這個特殊的二連桿機構，我們只對它機械手臂的位置感興趣，它是 x 和 y 坐標，它們是齊次變換矩陣中的這兩個元素，所以我將把它們複製出來。 \n \xa0 \n So here again is our expression for X and Y and what we\'re going to do is a fairly common trick , we\'re going to square and add these two equations and I get a relationship that looks like this . \n 所以這裡又是我們對 x 和 y 的表達式，我們要做的是一個相當常見的技巧，我們要平方並添加這兩個方程，我得到一個看起來像這樣的關係式。 \n \n \xa0 Now I can solve for the joint angle q2 in terms of the endefector pose X and Y and the robot\'s constants a1 and a2. \n 現在我可以根據機械手臂位置 x 和 y 以及機器人的常數a 1 和a 2 來求解節點角度q 2 。 \n \xa0 \n Now what I\'m going to do is apply the sum of angles identity . \n 現在我要做的是應用角度之和的特性。 \n \n I\'m going to expand these terms, sin of q1 plus q2 or cos of q1 plus q2 and to make life a little bit easier, I\'m going to make some substations, so where ever I had cos q2, I\'m going to write c2 and where ever I had sine q2, I\'m going to write s2. \n 我將展開這些項，sinq1+q 2 或 cosq1+ q 2 ，為了讓生活更輕鬆一點，我將建立一些部份，所以只要有 cosq2 ，我就會去取代c 2 並且在我有 sinq2 \xa0 的地方，取代為s 2 。 \n \xa0 \n It\'s a fairly common shorthand when people are looking at robot kinematic equations. And here are the equations after making those substitutions. \n 當人們解決機器人運動學方程時，這是一個相當常見的快速記法。這是進行這些替換後的方程式。 \n \xa0 \n Looking at these two equations, I can see that they fall into a very well known form and for that form there is a very well known solution. \n 看看這兩個方程，我可以看到它們屬於一個眾所周知的形式，對於這種形式，有一個眾所周知的解決方案。 \n \xa0 \n So I\'m going to consider just one of the equations, the equation for Y and using our well known identity and it\'s solution, I can determine the values for the variables little a, little b and little c and once l\'ve determined those, then I can just write down the solution for q1, which x is the equivalent of theta in this particular case. \n 所以我將只考慮其中一個方程式 Y ，使用我們眾所周知的恆等式和它的解，我可以確定變量 a 、 b 、 c \xa0 的值，一旦我確定了這些，然後我可以寫下q 1 的解決方案，在這種特殊情況下， x 相當於θ。 \n \xa0 \n Here again is our expression for q1, copied over from the previous slide and we may remember from earlier in our workings that we determined this particular relationship; X squared plus Y squared is equal to this particular complex expression. \n 這裡再次是我們對q 1 的表達式，從上一張幻燈片複製過來，我們可能還記得在我們工作的早期，我們確定了這種特殊關係； X 2+ Y 2 等於這個特定的複雜表達式。 \n \xa0 \n So I can substitute that in and do some simplification and I end up with this slightly less complex expression for q1. \n 因此，我可以將其替換並進行一些簡化，最終得到q1的這個稍微不那麼複雜的表達式。 \n \xa0 \n And it is the same expression that I got following the geometric approach in the previous section. \n 這與我在上一節中遵循幾何方法得到的表達式相同。 \n \n 結論: \n \n', 'tags': '', 'url': 'W15.html'}, {'title': 'coppeliasim', 'text': '新增零件: \n (建議零件是已經組合完畢的零件) \n \n -------------- \n 零件炸開: \n 選擇要炸開的零件接著如下 \n \n -------------- \n 零件移動: \n \n 可選擇xyz方向移動 \n \n -------------- \n 零件旋轉: \n \n 可選擇以xyz軸方向轉動 \n \n -------------- \n 軸: \n 1.旋轉的軸 \n \n -- \n 2.上下的軸 \n \n -- \n 更改軸的直徑長度: \n 按兩下軸的圖案接著如下更改直徑長度 \n \n -------------- \n 軸與零件結合: \n 選擇軸->按著shift選擇要結合的柱狀零件接著如下 \n \n', 'tags': '', 'url': 'coppeliasim.html'}]};