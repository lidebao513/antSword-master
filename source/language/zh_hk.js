//
// language::zh_hk
//
module.exports = {
  title: '中國蟻劍',
  toastr: {
    info: '提示',
    error: '錯誤',
    warning: '警告',
    success: '成功'
  },
  menubar: {
    main: {
      title: 'AntSword',
      about: '關於程序',
      pluginStore: '插件市場',
      settings: '系統設置',
      language: '語言設置',
      encoders: '編碼設置',
      aproxy: '代理設置',
      display: '顯示設置',
      update: '檢查更新',
      quit: '退出程序'
    },
    edit: {
      title: '編輯',
      undo: '撤銷',
      redo: '重做',
      cut: '剪切',
      copy: '複製',
      paste: '粘貼',
      selectall: '全選',
      search: '查找數據'
    },
    window: {
      title: '窗口',
      next: '下個窗口',
      prev: '上個窗口',
      close: '關閉窗口'
    },
    debug: {
      title: '調試',
      restart: '重啟應用',
      devtools: '開發者工具'
    },
    tray: {
      tip: '中國蟻劍',
      show: '顯示',
      hide: '隱藏',
      settings: '系統設置',
      about: '關於蟻劍',
      quit: '退出'
    }
  },
  shellmanager: {
    title: '列表管理',
    contextmenu: {
      terminal: '虛擬終端',
      filemanager: '文件管理',
      database: '數據操作',
      add: '添加數據',
      edit: '編輯數據',
      delete: '刪除數據',
      move: '移動數據',
      copy: '創建副本',
      search: '搜索數據',
      plugin: '加載插件',
      pluginDefault: '默認分類',
      pluginStore: '插件市場',
      clearCache: '清空緩存',
      clearAllCache: '清空所有緩存',
      viewsite: '瀏覽網站'
    },
    category: {
      title: '分類目錄',
      default: '默認分類',
      toolbar: {
        add: '添加',
        del: '刪除',
        rename: '重命名'
      },
      add: {
        title: '添加分類'
      },
      del: {
        title: '刪除分類',
        confirm: '確定刪除此分類嗎？（數據將清空）',
        success: (category) => antSword.noxss(`成功刪除分類（${category}）！`),
        error: (category, err) => antSword.noxss(`刪除分類（${category}）失敗！\n${err}`)
      },
      rename: {
        title: '重命名分類',
        disable: '禁止的分類名稱！',
        exists: '此分類名已經存在！',
        success: '重命名分類成功！',
        error: '重命名分類失敗！'
      }
    },
    list: {
      title: '數據管理',
      not_recommended: '不推薦',
      grid: {
        url: 'URL地址',
        ip: 'IP地址',
        addr: '物理位置',
        note: '網站備註',
        ctime: '創建時間',
        utime: '更新時間'
      },
      add: {
        title: '添加數據',
        toolbar: {
          test: '測試連接',
          add: '添加',
          clear: '清空'
        },
        form: {
          url: 'URL地址',
          pwd: '連接密碼',
          note: '網站備註',
          encode: '編碼設置',
          type: '連接類型',
          encoder: '編碼器'
        },
        test_success: '連接成功!',
        test_warning: '返回數據為空',
        warning: '請輸入完整！',
        success: '添加數據成功！',
        error: (err) => antSword.noxss(`添加數據失敗！\n${err}`)
      },
      edit: {
        title: (url) => antSword.noxss(`編輯數據（${url}）`),
        toolbar: {
          save: '保存',
          clear: '清空'
        },
        form: {
          url: 'URL地址',
          pwd: '連接密碼',
          note: '網站備註',
          encode: '編碼設置',
          type: '連接類型',
          encoder: '編碼器'
        },
        warning: '請輸入完整！',
        success: '更新數據成功！',
        error: (err) => antSword.noxss(`更新數據失敗！\n${err}`)
      },
      del: {
        title: '刪除數據',
        confirm: (len) => antSword.noxss(`確定刪除選中的${len}條數據嗎？`),
        success: (len) => antSword.noxss(`成功刪除${len}條數據！`),
        error: (err) => antSword.noxss(`刪除失敗！\n${err}`)
      },
      move: {
        success: (num) => antSword.noxss(`成功移動${num}條數據！`),
        error: (err) => antSword.noxss(`移動數據失敗！\n${err}`)
      },
      clearCache: {
        title: '清空緩存',
        confirm: '確定清空此緩存嗎？',
        success: '清空緩存完畢！',
        error: (err) => antSword.noxss(`清空緩存失敗！\n${err}`)
      },
      clearAllCache: {
        title: '清空緩存',
        confirm: '確定清空所有緩存數據嗎？',
        success: '清空全部緩存完畢！',
        error: (err) => antSword.noxss(`清空全部緩存失敗！\n${err}`)
      },
      accordion: {
        base: '基礎配置',
        http: '請求信息',
        other: '其他設置'
      },
      otherConf: {
        nohttps: '忽略HTTPS證書',
        usemultipart: '使用 Multipart 發包',
        chunk: {
          title: '分塊傳輸(實驗性功能)',
          usechunk: '開啟分塊傳輸發包',
          min: '最小分塊',
          max: '最大分塊',
          exphint: '該功能目前為實驗性功能, 無法與 Multipart 同時使用,部分類型的服務端可能不支持Chunked傳輸。此外,建議超時時長設置30s以上,避免網速不好的情況下影響數據傳輸。',
        },
        terminalCache: '虛擬終端使用緩存',
        filemanagerCache: '文件管理使用緩存',
        uploadFragment: '上傳文件分片大小',
        requestTimeout: '請求超時',
        commandPath: '自定義終端執行路徑'
      }
    }
  },
  terminal: {
    title: '虛擬終端',
    banner: {
      title: '基礎信息',
      drive: '磁盤列表',
      system: '系統信息',
      user: '當前用户',
      path: '當前路徑'
    },
    ascmd: {
      help: '輸入 ashelp 查看本地命令',
      ashelp: `使用幫助:
 ascmd [file]\t\t指定file來執行命令, eg: ascmd /bin/bash
 aslistcmd\t\t列出可使用的命令解釋器
 aspowershell [on|off]\t\t啟用/關閉PowerShell模式, eg: aspowershell on
 quit\t\t關閉終端
 exit\t\t關閉終端

快捷鍵:
 Ctrl =\t\t放大字體
 Ctrl -\t\t縮小字體
 Ctrl L\t\t清屏
 Ctrl U\t\t清除當前行
`,
      ascmd: (cmd) => antSword.noxss(`將使用 ${cmd} 執行命令.`),
      aspowershell: {
        on: "已啟用Powershell模式",
        off: "已關閉Powershell模式",
      },
    },
  },
  filemanager: {
    title: '文件管理',
    delete: {
      title: '刪除文件',
      confirm: (num) => antSword.noxss(`你確定要刪除 ${typeof(num) === 'number' ? num + ' 個文件' : num} 嗎？`),
      success: (path) => antSword.noxss(`刪除文件成功！\n${path}`),
      error: (path, err) => antSword.noxss(`刪除文件 [${path}] 失敗！${err ? '\n' + err : ''}`)
    },
    paste: {
      success: (path) => antSword.noxss(`粘貼文件成功！\n${path}`),
      error: (path, err) => antSword.noxss(`粘貼文件 [${path}] 失敗！${err ? '\n' + err : ''}`)
    },
    rename: {
      title: '重命名',
      success: '重命名文件成功！',
      error: (err) => antSword.noxss(`重命名文件失敗！${err ? '\n' + err : ''}`)
    },
    createFolder: {
      title: '新建目錄',
      value: '新目錄',
      success: (path) => antSword.noxss(`新建目錄成功！\n${path}`),
      error: (path, err) => antSword.noxss(`新建目錄 [${path}] 失敗！${err ? '\n' + err : ''}`)
    },
    createFile: {
      title: '新建文件',
      value: '新文件.txt',
      success: (path) => antSword.noxss(`新建文件成功！\n${path}`),
      error: (path, err) => antSword.noxss(`新建文件 [${path}] 失敗！${err ? '\n' + err : ''}`)
    },
    retime: {
      title: '更改時間',
      success: (path) => antSword.noxss(`更改文件時間成功！\n${path}`),
      error: (path, err) => antSword.noxss(`更改文件時間 [${path}] 失敗！${err ? '\n' + err : ''}`)
    },
    chmod: {
      title: '更改權限',
      check: "輸入應為八進制數表示的權限, eg: 0644",
      success: (path) => antSword.noxss(`更改文件權限成功！\n${path}`),
      error: (path, err) => antSword.noxss(`更改文件權限 [${path}] 失敗！${err ? '\n' + err : ''}`)
    },
    wget: {
      title: 'Wget下載文件',
      check: 'URL地址不正確！',
      task: {
        name: 'WGET下載',
        start: '開始下載..',
        success: '下載成功！',
        failed: (ret) => antSword.noxss(`失敗:${ret}`),
        error: (err) => antSword.noxss(`錯誤:${err}`)
      }
    },
    upload: {
      task: {
        name: '上傳',
        success: '上傳成功',
        httperr_413: '請將上傳文件分片大小設置調低',
        httperr_etime: '請求超時,請將超時時間調大',
        httperr_econnrefused: '連接被拒絕,檢查目標或代理是否開啟',
        failed: (err) => antSword.noxss(`失敗:${err}`),
        error: (err) => antSword.noxss(`出錯:${err}`)
      },
      success: (path) => antSword.noxss(`上傳文件成功！\n${path}`),
      error: (path, err) => antSword.noxss(`上傳文件 [${path}] 失敗！${err}`),
    },
    folder: {
      title: '目錄列表'
    },
    files: {
      title: '文件列表',
      bookmark: {
        add: '添加書籤',
        del: '移除書籤',
        clear: '清空書籤'
      },
      toolbar: {
        new: '新建',
        folder: '目錄',
        file: '文件',
        wget: 'Wget下載',
        upload: '上傳文件',
        up: '上層',
        refresh: '刷新',
        home: '主目錄',
        bookmark: '書籤',
        read: '讀取'
      },
      prompt: {
        add: {
          title: '添加到書籤',
          success: (path) => antSword.noxss(`添加書籤成功！\n${path}`),
        },
        remove: {
          title: '移除書籤',
          confirm: '確定移除此書籤嗎？',
          success: '移除書籤成功！'
        },
        clear: {
          title: '清空書籤',
          confirm: '確定清空所有書籤嗎？',
          success: '清空所有書籤成功！'
        }
      },
      grid: {
        header: {
          name: '名稱',
          time: '日期',
          size: '大小',
          attr: '屬性'
        },
        contextmenu: {
          paste: {
            title: '粘貼文件',
            all: '所有列表',
            clear: {
              title: '清空列表',
              info: '清空剪貼板'
            }
          },
          preview: '預覽文件',
          edit: {
            title: '編輯文件',
            openwindow: '窗口打開',
            opentab: '標籤打開',
          },
          delete: '刪除文件',
          rename: '重命名文件',
          refresh: '刷新目錄',
          wget: 'WGET下載',
          upload: '上傳文件',
          download: '下載文件',
          modify: '更改文件時間',
          chmod: '更改權限',
          copy: {
            title: '複製文件',
            copyname: '複製文件名',
            copypath: '複製文件路徑',
            copysuccess: '複製到剪貼板成功!',
            copyfail: '複製到剪貼板失敗!',
            warning: (id) => antSword.noxss(`已經添加到剪貼板！\n${id}`),
            info: (id) => antSword.noxss(`添加文件到剪貼板\n${id}`)
          },
          create: {
            title: '新建',
            folder: '目錄',
            file: '文件'
          },
          terminal: '在此處打開終端'
        }
      }
    },
    editor: {
      title: (path) => antSword.noxss(`編輯: ${path}`),
      toolbar: {
        save: '保存',
        mode: '高亮',
        encode: '用此編碼打開'
      },
      loadErr: (err) => antSword.noxss(`加載文件出錯！\n${err}`),
      success: (path) => antSword.noxss(`保存文件成功！\n${path}`),
      error: (path, err) => antSword.noxss(`保存文件 [${path}] 失敗！${err}`)
    },
    tasks: {
      title: '任務列表',
      grid: {
        header: {
          name: '名稱',
          desc: '簡介',
          status: '狀態',
          stime: '創建時間',
          etime: '完成時間'
        }
      }
    },
    download: {
      title: '下載文件',
      task: {
        name: '下載',
        wait: '準備下載',
        cancel: '取消下載',
        start: '開始下載',
        success: '下載成功',
        error: (err) => antSword.noxss(`出錯:${err}`)
      },
      error: (name, err) => antSword.noxss(`下載文件[${name}]出錯！\n${err}`),
      success: (name) => antSword.noxss(`下載文件[${name}]成功！`)
    }
  },
  database: {
    list: {
      title: '配置列表',
      add: '添加',
      del: '刪除',
      edit: '編輯',
      check: '檢測',
      menu: {
        add: '添加配置',
        del: '刪除配置',
        edit: '編輯配置',
        adddb: '新建數據庫',
        editdb: '編輯數據庫',
        deldb: '刪除數據庫',
        addtable: '新建表',
        edittable: '編輯表名',
        deltable: '刪除表',
        showcreatetable: '建表語句',
        desctable: '查看錶結構',
        addcolumn: '添加列',
        editcolumn: '編輯列名',
        delcolumn: '刪除列',
      }
    },
    query: {
      title: '執行SQL',
      exec: '執行',
      clear: '清空'
    },
    result: {
      title: '執行結果',
      warning: '操作完畢，但沒有結果返回！',
      error: {
        database: (err) => antSword.noxss(`獲取數據庫列表失敗！\n${err}`),
        table: (err) => antSword.noxss(`獲取表數據失敗！\n${err}`),
        column: (err) => antSword.noxss(`獲取字段列表失敗！\n${err}`),
        query: (err) => antSword.noxss(`執行SQL失敗！\n${err}`),
        parse: '返回數據格式不正確！',
        noresult: '沒有查詢結果！'
      },
      dump: {
        title: "導出查詢結果",
        success: "導出成功",
      }
    },
    notsupport: '該功能暫不支持當前類型數據庫',
    form: {
      title: '添加配置',
      toolbar: {
        add: '添加',
        clear: '清空',
        edit: '編輯',
        test: '測試連接'
      },
      conn: '連接字符串',
      type: '數據庫類型',
      encode: '數據庫編碼',
      host: '數據庫地址',
      user: '連接用户',
      passwd: '連接密碼',
      warning: '請填寫完整！',
      success: '成功添加配置！',
      test_success: '連接成功!',
      test_warning: '返回數據為空',
      del: {
        title: '刪除配置',
        confirm: '確定刪除此配置嗎？',
        success: '刪除配置成功！',
        error: (err) => antSword.noxss(`刪除配置失敗！\n${err}`)
      },
      adddb: {
        title: '新建數據庫',
        dbname: '名稱',
        characterset: '字符集',
        charactercollation: '字符集排序',
        createbtn: '創建',
        cancelbtn: '取消',
        success: '創建數據庫成功',
        error: '創建數據庫失敗',
      },
      editdb: {
        title: '修改數據庫',
        dbname: '名稱(只讀)',
        characterset: '字符集',
        charactercollation: '字符集排序',
        updatebtn: '修改',
        cancelbtn: '取消',
        success: '修改數據庫成功',
        error: '修改數據庫失敗',
      },
      deldb: {
        title: '刪除數據庫',
        confirm: (name) => antSword.noxss(`確定要刪除數據庫 ${name} 嗎?`),
        success: '刪除數據庫成功',
        error: '刪除數據庫失敗',
      },
      addtable: {
        title: '新建表',
        add: '新增字段',
        delete: '刪除字段',
        save: '保存',
        gridheader: "名稱,類型,長度,不為空,主鍵,自增長",
        delete_not_select: "請先選中要刪除的行",
        save_row_is_null: "行數為空",
        cell_valid_error: (i,j)=>`數據格式校驗失敗(${i+1}行,${j+1}列)`,
        confirmtitle: "輸入新表名",
        invalid_tablename: "表名不能帶有特殊符號",
        success: '新建表成功',
        error: '新建表失敗',
      },
      edittable: {
        title: "輸入新表名",
        invalid_tablename: "表名不能帶有特殊符號",
        success: '修改表名成功',
        error: '修改表名失敗',
      },
      deltable: {
        title:'刪除表',
        confirm: (name) => antSword.noxss(`確定要刪除表 ${name} 嗎?`),
        success: '刪除表成功',
        error: '刪除表失敗',
      },
      addcolumn: {

      },
      editcolumn: {
        title: "輸入新列名",
        invalid_tablename: "列名不能帶有特殊符號",
        get_column_type_error: "獲取列屬性失敗",
        success: '修改列名成功',
        error: '修改列名失敗'
      },
      delcolumn: {
        title:'刪除列',
        confirm: (name) => antSword.noxss(`確定要刪除列 ${name} 嗎?`),
        success: '刪除列成功',
        error: '刪除列失敗',
      }
    },
    probedb: {
      title: '檢測數據庫函數支持',
      success: '檢測完畢',
      coltype: '連接類型',
      issupport: '狀態',
    }
  },
  settings: {
    about: {
      title: '關於程序',
      header: '中國蟻劍',
      homepage: '主頁',
      document: '文檔',
      qqgroup: 'Q羣',
      discord: '在線交流',
      wechat: '關注微信公眾號'
    },
    language: {
      title: '語言設置',
      toolbar: {
        save: '保存'
      },
      form: {
        label: '選擇顯示語言'
      },
      success: '保存語言設置成功！',
      confirm: {
        content: '重啟應用生效，是否重啟？',
        title: '更改語言'
      }
    },
    update: {
      title: '檢查更新',
      current: '當前版本',
      toolbar: {
        check: '檢查'
      },
      check: {
        ing: '檢查更新中。。',
        fail: (err) => `檢查更新失敗！\n${err}`,
        none: (ver) => `檢查完畢，暫無更新！【v${ver}】`,
        found: (ver) => `發現新版本【v${ver}】`
      },
      prompt: {
        btns: {
          ok: '立即更新',
          no: '下次再説'
        },
        body: (ver) => `發現新版本 v${ver}, 是否更新?`,
        title: '版本更新',
        changelog: '更新日誌：',
        sources: '更新來源：',
        fail: {
          md5: '文件MD5值校驗失敗！',
          unzip: (err) => `解壓文件失敗！【${err}】`
        }
      },
      message: {
        githint: (workdir)=>`當前源碼為Git管理，請關閉程序並前往 ${workdir} 手動更新`,
        prepare: "連接更新服務器...",
        dling: (progress)=> `正在下載更新包...${progress}%`,
        dlingnp: (size)=> `正在下載更新包...${size}`,
        dlend: "下載完畢",
        extract: "正在解壓, 請務關閉程序",
        ing: '努力更新中。。',
        fail: (err) => `更新失敗！【${err}】`,
        success: '更新成功！請稍後手動重啟應用！'
      }
    },
    encoders:{
      title: '編碼管理',
      toolbar: {
        new: "新建",
        edit: "編輯",
        delete: "刪除",
        help: "幫助",
        save: "保存",
      },
      grid: {
        ename: "名稱",
        etype: "類型"
      },
      edit_win_title: "編輯編碼器",
      delete_title: "刪除編碼器",
      message: {
        ename_duplicate: "編碼器名稱不能重複",
        rename_success: "重命名成功",
        etype_error: "編碼器類型錯誤",
        retype_success: "類型修改成功",
        create_success: "新增編碼器成功",
        edit_not_select: "請先選中要編輯的行",
        edit_only_single: "只能編輯一個",
        edit_null_value: "編碼器內容不能為空",
        edit_save_success: "保存成功",
        delete_not_select: "請先選中要刪除的行",
        delete_success: "刪除成功",
        ename_invalid: "名稱只能包含數字、字母、下劃線",
      },
      prompt: {
        create_encoder: "創建編碼器",
      },
      confirm: {
        delete: (num) => antSword.noxss(`你確定要刪除 ${typeof(num) === 'number' ? num + ' 個編碼器' : num+" "}嗎？`),
      }
    },
    aproxy: {
      title: '代理設置',
      toolbar: {
        save: '保存',
        test: '測試連接'
      },
      form: {
        label: '配置訪問互聯網的代理',
        mode:{
          noproxy: '不使用代理',
          manualproxy: '手動設置代理'
        },
        proxy: {
          protocol: '代理協議',
          server: '代理服務器',
          port: '端口',
          username: '用户名',
          password: '密碼',
          authtip: '如果無認證方式請留空'
        }
      },
      success: '保存代理設置成功！',
      error: '保存代理設置失敗！',
      confirm: {
        content: '重啟應用生效，是否重啟？',
        title: '更改代理設置'
      },
      prompt:{
        title: '輸入測試的 URL',
        success: '連接到代理服務器成功',
        error: '連接到代理服務器失敗'
      }
    },
    display: {
      title: '顯示設置',
      success: '保存顯示設置成功！',
      error: '保存顯示設置失敗！',
      confirm: {
        content: '重啟應用生效，是否重啟？',
        title: '更改顯示設置'
      },
      toolbar: {
        save: '保存'
      },
      form:{
        shellmanager: {
          title: '數據管理',
          hiddencolumns: {
            title: '隱藏選中列',
            url: 'URL地址',
            ip: 'IP地址',
            addr: '物理位置',
            note: '網站備註',
            ctime: '創建時間',
            utime: '更新時間'
          }
        }
      }
    },
    adefault: {
      title: '默認設置',
      success: '保存成功',
      error: '保存失敗！',
      confirm: {
        content: '重啟應用生效，是否重啟？',
        title: '更改默認設置'
      },
      toolbar: {
        save: '保存',
      },
      filemanager: {
        title: '文件管理',
        openfileintab: {
          title: '文件打開方式',
          window: '窗口打開',
          tab: '標籤打開',
        },
        bookmark: {
          title: '全局書籤',
          nodata: '當前暫無數據, 請單擊鼠標右鍵添加',
          grid: {
            name: '名稱',
            path: '目錄'
          },
          bmenu: {
            add: '添加書籤',
            del: '刪除書籤'
          },
          add: {
            title: '添加全局書籤',
            success: '添加成功',
            namedup: '名稱不能重複',
            name_invalid: '名稱不合法',
            addbtn: '確定'
          },
          del: {
            title: '刪除書籤',
            confirm: (num) => antSword.noxss(`你確定要刪除 ${typeof(num) === 'number' ? num + ' 個書籤' : num+" "}嗎？`),
            success: '刪除成功'
          },
          edit: {
            namedup: '名稱不能重複',
            name_invalid: '名稱不合法',
            success: '更新成功'
          }
        },
      }
    }
  },
  plugin: {
    error: (err) => antSword.noxss(`加載插件中心失敗！\n${err}`)
  },
  update: {
    title: '發現更新',
    body: (ver) => `新的版本：${ver}, 查看更新日誌`,
  },
  viewsite: {
    toolbar: {
      useproxy: (s) => `代理: ${s?'開':'關'}`,
      save: '保存',
      view: '瀏覽'
    },
    saveSuccess: '保存Cookie成功！',
    saveFailed: (err) => `保存Cookie失敗！\n${err}`
  }
}
