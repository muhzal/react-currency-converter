export function currency(value = 0) {
  if (isNaN(+value)) {
    return 0;
  }

  const fixed = value > 1000 ? 2 : 4;

  return (+parseFloat(value).toFixed(fixed)).toLocaleString('en-USD', {
    minimumFractionDigits: fixed,
  });
}

export function currencyMask(amount = '') {
  const digits = amount.toString().split('.');

  let value = digits[0] || 1;
  let decimal = digits[1] || '';

  const diff = decimal.length - 4;

  // decimal.length more than 4 char then move first decimal char to last char of value
  // example: 12.34567 => 123.4567
  if (diff > 0) {
    value += decimal.substr(0, diff);
    decimal = decimal.substr(diff, 4);

    // value.length more than 1 char  and decimal less than 2 then move last char of value to first char of decimal
    // example: 12.3 => 1.23
  } else if (value.length > 1 && decimal.length < 2) {
    decimal = value.substr(-1) + decimal;
    value = value.substr(0, value.length - 1);

    // value.length is 1 char and decimal less than 2 then move last char of value to first char of decimal
    // example: 12.3 => 1.23
  } else if (value.length === 1 && decimal.length < 2) {
    decimal = (decimal || 0) + '0';
  }

  return [value.replace(/\B(?=(\d{3})+(?!\d))/g, ','), decimal]
    .filter(Boolean)
    .join('.');
}
