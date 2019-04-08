/**
 * 设置中心::默认设置
 */

const LANG = antSword['language']['settings']['adefault'];
const LANG_T = antSword['language']['toastr'];

class ADefault {

  constructor(sidebar) {
    var self = this;
    sidebar.addItem({
      id: 'adefault',
      text: `<i class="fa fa-sliders"></i> ${LANG['title']}`
    });
    const cell = sidebar.cells('adefault');
    const default_config = {
      filemanager: {
        openfileintab: false,
        bookmarks: {},
      },
    };
    // 读取配置
    const filemanager_settings = JSON.parse(antSword['storage']("adefault_filemanager", false, JSON.stringify(default_config.filemanager)));
    this.filemanager_settings = filemanager_settings;
    if(!this.filemanager_settings.bookmarks){
      this.filemanager_settings.bookmarks = default_config.filemanager.bookmarks;
    }

    const toolbar = cell.attachToolbar();
    toolbar.loadStruct([
      { id: 'save', type: 'button', text: LANG['toolbar']['save'], icon: 'save' }
    ]);
    // 表单
    const form = cell.attachForm([{
      type: 'block', name: 'filemanager', list: [
        // {type: "label", label: LANG['filemanager']['title']},
        {
          type: "fieldset", label: LANG['filemanager']['title'], list:[
            { type: "block", list: [
              {type: "label", label: LANG['filemanager']['openfileintab']['title']},
              {type: 'newcolumn', offset:20},
              {
              type: "radio", label: LANG['filemanager']['openfileintab']['window'], name: 'openfileintab', checked: filemanager_settings.openfileintab == false , position: "label-right", value: false,
              },
              {type: 'newcolumn', offset:20},
              {
                type: "radio", label: LANG['filemanager']['openfileintab']['tab'], name: 'openfileintab', checked: filemanager_settings.openfileintab == true , position: "label-right", value: true,
              }
            ]},
            // 后续文件管理其它设置
            { type: 'block', list: [
              {type: 'label', label: LANG['filemanager']['bookmark']['title']},
              {type: 'container', name: 'filemanager_bookmarks', inputWidth: 600, inputHeight: 200},
            ]},
          ]
        }
      ]}, 
      // 后续其它模块
    ], true);
    form.enableLiveValidation(true);
    let bookmark_grid = new dhtmlXGridObject(form.getContainer('filemanager_bookmarks'));
    bookmark_grid.setHeader(`
    &nbsp;,
    ${LANG['filemanager']['bookmark']['grid']['name']},
    ${LANG['filemanager']['bookmark']['grid']['path']}
    `);
    bookmark_grid.setColTypes("ro,edtxt,edtxt");
    bookmark_grid.setColSorting('str,str,str');
    bookmark_grid.setInitWidths("40,*,200");
    bookmark_grid.setColAlign("center,left,left");
    bookmark_grid.enableMultiselect(true);
    // grid右键
    // 空白数据右键fix
    $('.objbox').on('contextmenu', (e) => {
      (e.target.nodeName === 'DIV' && bookmark_grid.callEvent instanceof Function && antSword['tabbar'].getActiveTab() === "tab_about" && sidebar.getActiveItem() === "adefault") ? bookmark_grid.callEvent('onRightClick', [-1, -1, e]) : null;
    });
    $('.objbox').on('click', (e) => {
      bmenu.hide();
    });
    bookmark_grid.attachEvent('onRightClick', (id, lid, event)=>{
      let _ids = (bookmark_grid.getSelectedId()|| '').split(',');
      if (id === -1) {
        _ids = [];
      } else if (_ids.length === 1) {
        // 如果没有选中？则选中右键对应选项
        bookmark_grid.selectRowById(id);
        _ids = [id];
      };
      let ids = [];
      _ids.map((_) => {
        ids.push(bookmark_grid.getRowAttribute(_, 'bname'));
      });
      id = ids[0] || '';

      let menu = [
        { text: LANG['filemanager']['bookmark']['bmenu']['add'], icon: 'fa fa-plus-circle', action: self.addBookMarks.bind(self)},
        { text: LANG['filemanager']['bookmark']['bmenu']['del'], icon: 'fa fa-trash-o', action: () => {
          self.delBookMarks(ids);
        }},
      ];
      bmenu(menu, event);
      return true;
    });

    bookmark_grid.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
      // 2 编辑完成
      if(stage === 2) {
        if(nValue === oValue){return;}
        var obname = bookmark_grid.getRowAttribute(rId, "bname");
        var obpath = bookmark_grid.getRowAttribute(rId, "bpath");
        switch(cInd){ // 具体是哪一列被编辑了
          case 1: // name
            // if(!nValue.match(/^[a-zA-Z0-9_/]+$/)){
            //   toastr.error(LANG["filemanager"]['bookmark']['edit']["name_invalid"], LANG_T['error']);
            //   return
            // }
            if(self.filemanager_settings.bookmarks.hasOwnProperty(obname)){
              delete self.filemanager_settings.bookmarks[obname];
              self.filemanager_settings.bookmarks[nValue] = obpath;
            }
            toastr.success(LANG["filemanager"]['bookmark']['edit']["success"],LANG_T["success"]);
            break;
          case 2: // path
            nValue = nValue.replace(/\\/g,'/');
            if(!nValue.endsWith('/')){
              nValue += '/';
            }
            if(self.filemanager_settings.bookmarks.hasOwnProperty(obname)){
              self.filemanager_settings.bookmarks[obname] = nValue;
            }
          break;
        }
        antSword['storage']('adefault_filemanager', self.filemanager_settings);
        self.reloadFMBookmarks();
      }
    });

    bookmark_grid.init();
    this.bookmark_grid = bookmark_grid;

    // 保存
    toolbar.attachEvent('onClick', (id) => {
      switch(id){
        case 'save':
          if(form.validate()){
            var _formvals = form.getValues();
            let config = default_config;
            config.filemanager.openfileintab = _formvals['openfileintab'];
            config.filemanager.bookmarks = self.filemanager_settings.bookmarks;
            // save
            // save 文件管理设置
            antSword['storage']('adefault_filemanager', config.filemanager);
            toastr.success(LANG['success'], LANG_T['success']);
            // 重启应用
            layer.confirm(LANG['confirm']['content'], {
              icon: 2, shift: 6,
              title: LANG['confirm']['title']
            }, (_) => {
              location.reload();
            });
          }else{
            toastr.error(LANG['error'], LANG_T['error']);
          }
        break;
      }
    });

    this.reloadFMBookmarks();
  }
  // 重载 bookmarks grid
  reloadFMBookmarks(){
    let self = this;
    let data = [];
    let _id = 1;
    Object.keys(self.filemanager_settings.bookmarks).map((t)=>{
      data.push({
        id: _id,
        bname: t,
        bpath: self.filemanager_settings.bookmarks[t],
        data: [
          `<i class="fa fa-bookmark-o"></i>`,
          antSword.noxss(t),
          antSword.noxss(self.filemanager_settings.bookmarks[t])
        ]
      });
      _id++;
    });
    if(data.length == 0){
      data.push({
        id: _id,
        bname: '',
        bpath: '',
        data: [
          `<i class="fa fa-bookmark-o"></i>`,
          LANG['filemanager']['bookmark']['nodata'],
          '&nbsp;'
        ]
      });
    }
    self.bookmark_grid.clearAll();
    self.bookmark_grid.parse({
      'rows': data
    }, 'json');
  }

  addBookMarks() {
    let self = this;
    let hash = +new Date();
    let index = layer.prompt({
      title: `<i class="fa fa-bookmark"></i> ${LANG['filemanager']['bookmark']['add']['title']}`,
      content: '<input type="text" style="width:300px;" class="layui-layer-input" id="bname_' + hash + '" value="" placeholder="bookmark name"><p/><input style="width:300px;" type="text" id="bpath_' + hash + '" class="layui-layer-input" value="" placeholder="bookmark path">',
      btn: [LANG['filemanager']['bookmark']['add']['addbtn']],
      yes: (i) => {
        let _bname = $(`#bname_${hash}`);
        let _bpath = $(`#bpath_${hash}`);
        let bname = _bname.val();
        let bpath = _bpath.val();
        let gbm = self.filemanager_settings.bookmarks;
        if(gbm.hasOwnProperty(bname)) {
          _bname.focus();
          return toastr.warning(LANG['filemanager']['bookmark']['add']['namedup'], LANG_T['warning']);
        }
        bpath = bpath.replace(/\\/g,'/');
        if(!bpath.endsWith('/')) {
          bpath += '/';
        }
        gbm[bname] = bpath;
        self.filemanager_settings.bookmarks = gbm;
        antSword['storage']('adefault_filemanager', self.filemanager_settings);
        self.reloadFMBookmarks();
        toastr.success(LANG['filemanager']['bookmark']['add']['success'], LANG_T['success']);
        layer.close(i);
      }
    });
  }

  delBookMarks(ids) {
    let self = this;
    if(ids.length === 1 && !ids[0]) {
      return
    }
    layer.confirm(
      LANG['filemanager']['bookmark']['del']['confirm'](ids.length > 1 ? ids.length:ids[0]),
      {
        icon: 2,
        shift: 6,
        title: `<i class="fa fa-trash"></i> ${LANG['filemanager']['bookmark']['del']['title']}`,
      },
      (_) => {
        layer.close(_);
        ids.map((p)=>{
          if(self.filemanager_settings.bookmarks.hasOwnProperty(p)) {
            delete self.filemanager_settings.bookmarks[p];
          }
        });
        antSword['storage']('adefault_filemanager', self.filemanager_settings);
        self.reloadFMBookmarks();
        toastr.success(LANG['filemanager']['bookmark']['del']['success'], LANG_T['success']);
      }
    )
  }

}

module.exports = ADefault;
