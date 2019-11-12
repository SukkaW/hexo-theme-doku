module.exports = function (hexo) {
    hexo.extend.tag.register('note', (args, content) => {
        const className = args.shift();
        let header = '';
        let result = '';

        if (args.length) {
          header += `<strong class="doku-note-title">${args.join(' ')}</strong>`;
        }

        result += `<blockquote class="is-${className}">${header}`;
        result += hexo.render.renderSync({text: content, engine: 'markdown'});
        result += '</blockquote>';

        return result;
      }, true);
}