module.exports = function (hexo) {
    hexo.extend.helper.register('page_title', function (page = null) {
        page = (page === null) ? this.page : page;

        return [page.title, hexo.config.title].filter((str) => typeof (str) !== 'undefined' && str.trim() !== '').join(' | ');
    });

    hexo.extend.helper.register('_meta_generator', () => `<meta name="generator" content="Hexo ${hexo.version}">`);
}