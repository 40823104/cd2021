var tipuesearch = {"pages": [{'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n', 'tags': '', 'url': 'About.html'}, {'title': 'W1', 'text': '創建網站: \n 到 https://github.com/mdecourse/cmstemplate \n 按下 \n 創建新倉儲 cd2021 \n 打開小黑窗 \n cd tmp \n git clone --recurse-submodules 倉儲網址.git \n \n 打開網站: \n cd tmp/cd2021/cmsimde \n python wsgi.py \n 在網址欄打上localhost:9443 \n \n 編輯網站後: \n 按下右上角的generate_pages \n cd tmp/cd2021 \n git add . \n git commit -m"名字" \n git push \n', 'tags': '', 'url': 'W1.html'}, {'title': 'ssh', 'text': '開啟小黑窗輸入 \n sh \n ssh-keygen -t rsa -b 4096 -C "40823104"\xa0 (" "內為學號) \n 在以下路徑(/y/home/.ssh/id_rsa)生成鑰匙及檔案 \n 設定密碼(不須密碼直接enter) \n 產生成功 \n \n \n 在小白窗開啟 增加set GIT_SSH=%Disk%:\\putty\\plink.exe然後儲存 \n \n 開啟puttygen.exe 按下load \n \n 選擇剛才建的id_rsa \n \n 按下safe public key \n \n 存成檔案 學號.ppk \n 開啟檔案putty.exe \n 在host name中輸入github.com \n 選擇下方github.com點選load \n \n 旁邊分支線中選擇ssh下面的auth \n 按browse選擇剛才的ppk檔案 \n \n 然後回到session按下save \n 接著到github的setting中增加ssh key即成功 \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'site404', 'text': '打開github倉儲設定 \n \n 往下滑找到github page裡面的source \n none改成main或master,資料夾為root,然後save \n \n \n', 'tags': '', 'url': 'site404.html'}, {'title': 'leo', 'text': '小黑窗輸入leo即可開啟leo視窗 \n \n \n 更改作者名稱及網站名 \n \n 更改blog網址 \n \n \n 修改網誌內容 \n \n \n \n \n 儲存leo更改內容(push) \n \n', 'tags': '', 'url': 'leo.html'}, {'title': 'Stage1', 'text': '題目:挖土機手臂 \n 小組網站: https://40823104.github.io/stage1-ag4/content/index.html \n 組員網站: https://40823101.github.io/cd2021/content/index.html \n', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W2', 'text': '今天確認主題為挖土機手臂結構， \n 動機為想 研究挖土機手臂構造及作動原理， \n 本周從AUTOCAD開始繪製2D圖檔，再利用SOLIDWORK繪製3D圖， \n 預計下周用 CoppeliaSim模擬測試及修改。 \n 參考資料: \n https://kknews.cc/zh-tw/news/nbx58m5.html \n 立體圖繪製影片: \n \n \n \n \n \n \n 立體組合圖影片: \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '將挖土機手臂的組合圖stl檔以coppeliasim作動測試 \n \xa0(發現soildwork的組合圖轉為stl檔後會自動拆開,變成一個個零件stl檔,後來改成匯出成step檔後放入inventor,再轉成stl檔即可為完整的組合圖) \n 測試影片1:將組合件建立從屬關係,並在三個主動軸上添加虛擬軸,結果失敗,各零件四散 \n 結果1:失敗,各零件四散,疑似從屬關係不順 \n \n \n 測試影片2:重新建立組合件之從屬關係,並在各軸上增加虛擬軸以加強物件之間的約束 \n 結果2: 失敗,各零件四散,虛擬軸似乎和物件拘束關係無關 \n \n \n 測試影片3:以手動方式轉動虛擬軸 \n 結果3:失敗, 疑似因為我們的主題挖土機手臂需要多個零件互相約束,但coppeliasim只能以一個主動件配合多個從動件,無法讓一個零件既是主動件也是從動件,所以用程式作動時會出現零件約束不足,因此無法順利作動並且零件四散 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '上台報告 \n PDF: https://40823104.github.io/stage1-ag4/downloads/%E5%8D%94%E5%90%8C%E7%94%A2%E5%93%81%E8%A8%AD%E8%A8%88%E8%88%87%E5%AF%A6%E7%BF%92.pdf \n reveal: https://40823104.github.io/stage1-ag4/reveal/index.html \n 影片: \n \n 各組影片名稱更名及長度 \n https://drive.google.com/drive/folders/1n4L-tWhAaJEzP7O9FdyERihYsy7aEJ07?usp=sharing \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'Stage2', 'text': '題目: 腳踏車 \n 組員網站:林晏鈴: https://40823101.github.io/cd2021/content/index.html \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0林郁凱: https://40823119.github.io/cd2021/content/index.html \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0蘇鷺瑋: https://40823150.github.io/cd2021/content/index.html \n 小組網站: https://40823101.github.io/stage2-ag4/content/index.html \n', 'tags': '', 'url': 'Stage2.html'}, {'title': 'W5', 'text': '暫定題目:腳踏車 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '繪製2D圖抓大概尺寸 \n 檔案連結: https://drive.google.com/drive/folders/19oOTUK06qoGMvMf67qVqm9LB-Mh0Vkea?usp=sharing \n 因為用 CoppeliaSim模擬鍊條太過費時,因此將鍊條拿掉 \n 直接以齒輪傳動 \n \n \n \n 參考腳踏車: \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '繪製立體圖並組合,交給負責 CoppeliaSim的組員 \n 檔案連結: https://drive.google.com/drive/folders/19oOTUK06qoGMvMf67qVqm9LB-Mh0Vkea?usp=sharing \n \n \n 影片: \n', 'tags': '', 'url': 'W7.html'}]};