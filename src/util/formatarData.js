const { parseISO } = require('date-fns');
const format = require('date-fns/format');

const formatarData = (data) => {
    const dataFormatada = parseISO(data);
    return format(dataFormatada, 'yyyy-MM-dd');
};

module.exports = formatarData;

