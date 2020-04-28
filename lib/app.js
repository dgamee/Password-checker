'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

$(document).ready(function () {
    $('#search').click(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var api, password, inputHash, res, jsonRes;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        api = 'https://passwords.xposedornot.com/api/v1/pass/anon/';
                        password = $('#password').val();
                        inputHash = keccak_512(password).substring(0, 10);
                        _context.prev = 3;
                        _context.next = 6;
                        return fetch(api + inputHash);

                    case 6:
                        res = _context.sent;

                        if (!res.ok) {
                            _context.next = 13;
                            break;
                        }

                        _context.next = 10;
                        return res.json();

                    case 10:
                        jsonRes = _context.sent;

                        $('#detail').html('Password has been leaked <b id="red">' + jsonRes.SearchPassAnon.count + '</b> times');
                        $('#password').val('');

                    case 13:
                        if (res.status === 404) {
                            $('#detail').val('');
                            $('#detail').html('Password has not been leaked');
                            $('#password').val('');
                        }
                        _context.next = 19;
                        break;

                    case 16:
                        _context.prev = 16;
                        _context.t0 = _context['catch'](3);

                        console.log(_context.t0);

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 16]]);
    })));

    $('#hash').click(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var password, inputHash;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        password = $('#psw').val();
                        inputHash = keccak_512(password);

                        console.log(inputHash);
                        $('#hashDetail').html('Your hashed password is <b class="lockscreen-wrapper"id="green">' + inputHash.substring(0, 45) + '\n        <br>' + inputHash.substring(45, 90) + '<br>' + inputHash.substring(90, 129) + '</b>');
                        $('#hashDetail').val('');

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    })));
});