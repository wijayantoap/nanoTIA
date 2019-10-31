export const truncate = (input, num) => input.length > num || 250 ? `${input.substring(0, num || 250)}...` : input;

export const stripHTML = (input) => input.replace(/<[^>]*>?/gm, '');
