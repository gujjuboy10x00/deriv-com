import { TSpecification } from '../_types'

const derived_specification: TSpecification = {
    market: 'derived',
    data: [
        {
            instrument: {
                symbol: 'BOOM1000NEW',
                instrument: 'Boom 1000 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            minimum_spread: 0.1295,
            target_spread: 0.1323,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0194,
            swap_short: -0.0194,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VBOOMIC300',
                instrument: 'Boom 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.056,
            target_spread: 0.058,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.0833,
            swap_short: -0.0833,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'BOOM500NEW',
                instrument: 'Boom 500 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            minimum_spread: 0.1,
            target_spread: 0.102,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0278,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'CRASH1000NEW',
                instrument: 'Crash 1000 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            minimum_spread: 0.0975,
            target_spread: 0.0991,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0194,
            swap_short: -0.0194,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VCRASHIC300',
                instrument: 'Crash 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.204,
            target_spread: 0.22,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.0833,
            swap_short: -0.0833,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'CRASH500NEW',
                instrument: 'Crash 500 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            minimum_spread: 0.098,
            target_spread: 0.1,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0278,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP10NEW',
                swf_icon: true,
                instrument: 'Jump 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 2.08,
            target_spread: 2.11,
            max_effective_leverage: 2000,
            margin_requirement: 0.05,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP100NEW',
                swf_icon: true,
                instrument: 'Jump 100 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.57,
            target_spread: 0.62,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0278,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP25NEW',
                swf_icon: true,
                instrument: 'Jump 25 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 5.17,
            target_spread: 5.27,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0069,
            swap_short: -0.0069,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP50NEW',
                swf_icon: true,
                instrument: 'Jump 50 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 3.88,
            target_spread: 4.03,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -0.0139,
            swap_short: -0.0139,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'JUMP75NEW',
                swf_icon: true,
                instrument: 'Jump 75 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 1.75,
            target_spread: 1.85,
            max_effective_leverage: 400,
            margin_requirement: 0.25,
            swap_long: -0.0208,
            swap_short: -0.0208,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'RANGEBREAK100New',
                swf_icon: true,
                instrument: 'Range Break 100 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 1,
            target_spread: 1,
            max_effective_leverage: '-',
            margin_requirement: '400 USD margin per lot',
            swap_long: -30,
            swap_short: -30,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'RANGEBREAK200New',
                swf_icon: true,
                instrument: 'Range Break 200 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 1,
            target_spread: 1,
            max_effective_leverage: '-',
            margin_requirement: '800 USD margin per lot',
            swap_long: -30,
            swap_short: -30,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'STEPINDICES',
                swf_icon: true,
                instrument: 'Step Index',
            },
            contract_size: 10,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.1,
            target_spread: 0.1,
            max_effective_leverage: '-',
            margin_requirement: '25 USD margin per lot',
            swap_long: -0.0015,
            swap_short: -0.0015,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX10S1NEW',
                swf_icon: true,
                instrument: 'Volatility 10 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            minimum_spread: 0.22,
            target_spread: 0.22,
            max_effective_leverage: 4000,
            margin_requirement: 0.025,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX10NEW',
                swf_icon: true,
                instrument: 'Volatility 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.3,
            minimum_spread: 0.167,
            target_spread: 0.167,
            max_effective_leverage: 4000,
            margin_requirement: 0.025,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX100S1NEW',
                swf_icon: true,
                instrument: 'Volatility 100 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.1,
            minimum_spread: 0.5,
            target_spread: 0.5,
            max_effective_leverage: 2000,
            margin_requirement: 0.05,
            swap_long: -0.0278,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX100NEW',
                swf_icon: true,
                instrument: 'Volatility 100 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.2,
            minimum_spread: 0.39,
            target_spread: 0.39,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0278,
            swap_short: -0.0278,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX2001S',
                swf_icon: true,
                instrument: 'Volatility 200 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.02,
            minimum_spread: 0.01,
            target_spread: 0.01,
            max_effective_leverage: 300,
            margin_requirement: 0.333,
            swap_long: -0.0556,
            swap_short: -0.0556,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX25S1NEW',
                swf_icon: true,
                instrument: 'Volatility 25 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            minimum_spread: 25.74,
            target_spread: 25.74,
            max_effective_leverage: 4000,
            margin_requirement: 0.025,
            swap_long: -0.0069,
            swap_short: -0.0069,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX25NEW',
                swf_icon: true,
                instrument: 'Volatility 25 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.123,
            target_spread: 0.123,
            max_effective_leverage: 3000,
            margin_requirement: 0.033,
            swap_long: -0.0069,
            swap_short: -0.0069,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX3001S',
                swf_icon: true,
                instrument: 'Volatility 300 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.01,
            target_spread: 0.01,
            max_effective_leverage: 200,
            margin_requirement: 0.5,
            swap_long: -0.0833,
            swap_short: -0.0833,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX50S1NEW',
                swf_icon: true,
                instrument: 'Volatility 50 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            minimum_spread: 63.09,
            target_spread: 63.09,
            max_effective_leverage: 3000,
            margin_requirement: 0.033,
            swap_long: -0.0139,
            swap_short: -0.0139,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX50NEW',
                swf_icon: true,
                instrument: 'Volatility 50 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 3,
            minimum_spread: 0.022,
            target_spread: 0.022,
            max_effective_leverage: 2000,
            margin_requirement: 0.05,
            swap_long: -0.0139,
            swap_short: -0.0139,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX75S1NEW',
                swf_icon: true,
                instrument: 'Volatility 75 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            minimum_spread: 1.99,
            target_spread: 1.99,
            max_effective_leverage: 2000,
            margin_requirement: 0.05,
            swap_long: -0.0208,
            swap_short: -0.0208,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'INDEX75NEW',
                swf_icon: true,
                instrument: 'Volatility 75 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.001,
            minimum_spread: 77,
            target_spread: 77,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0208,
            swap_short: -0.0208,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX1501S',
                swf_icon: true,
                instrument: 'Volatility 150 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            minimum_spread: 5.15,
            target_spread: 5.15,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0417,
            swap_short: -0.0417,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX2501S',
                swf_icon: true,
                instrument: 'Volatility 250 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.002,
            minimum_spread: 73.85,
            target_spread: 73.85,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'AUDUSD10',
                instrument: 'AUDUSD DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 7.25,
            target_spread: 8.8,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'EURUSD10',
                instrument: 'EURUSD DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 8.47,
            target_spread: 10.11,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'GBPUSD10',
                instrument: 'GBPUSD DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 8.16,
            target_spread: 9.59,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'USDCHF10',
                instrument: 'USDCHF DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 8.5,
            target_spread: 11.03,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'USDJPY10',
                instrument: 'USDJPY DFX 10 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 12.64,
            target_spread: 17.55,
            max_effective_leverage: 500,
            margin_requirement: 0.2,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Sun 22:05 - Friday 21:55 GMT\nDaily Break: 22:00-22:05',
        },
        {
            instrument: {
                symbol: 'AUDBASKET',
                instrument: 'AUD Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.048,
            target_spread: 0.124,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'EURBASKET',
                instrument: 'EUR Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.04,
            target_spread: 0.108,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'GBPBASKET',
                instrument: 'GBP Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.042,
            target_spread: 0.121,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'GOLDBASKET',
                instrument: 'Gold Basket',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 65.012,
            target_spread: 79.78,
            max_effective_leverage: 200,
            margin_requirement: 0.5,
            swap_long: -0.0003,
            swap_short: -0.0003,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'USDBASKET',
                instrument: 'USD Basket',
            },
            contract_size: 100,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.034,
            target_spread: 0.095,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0028,
            swap_short: -0.0028,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'AUDUSD20',
                instrument: 'AUDUSD DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 11.83,
            target_spread: 15.19,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0056,
            swap_short: -0.0056,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'EURUSD20',
                instrument: 'EURUSD DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 10.27,
            target_spread: 14.87,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0056,
            swap_short: -0.0056,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'GBPUSD20',
                instrument: 'GBPUSD DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 13.51,
            target_spread: 17.3,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0056,
            swap_short: -0.0056,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'USDCHF20',
                instrument: 'USDCHF DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 11.09,
            target_spread: 15.01,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0056,
            swap_short: -0.0056,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'USDJPY20',
                instrument: 'USDJPY DFX 20 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 12.21,
            target_spread: 16.44,
            max_effective_leverage: 1000,
            margin_requirement: 0.1,
            swap_long: -0.0056,
            swap_short: -0.0056,
            trading_hours: 'Mon 00:00 - Fri 20:55 GMT',
        },
        {
            instrument: {
                symbol: 'DEX900DN',
                instrument: 'DEX 900 DOWN Index',
            },
            contract_size: 0.01,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.88,
            target_spread: 0.91,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX900UP',
                instrument: 'DEX 900 UP Index',
            },
            contract_size: 0.01,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 1.13,
            target_spread: 1.16,
            max_effective_leverage: 50,
            margin_requirement: 2,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX600DN',
                instrument: 'DEX 600 DOWN Index',
            },
            contract_size: 0.01,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.99,
            target_spread: 1.01,
            max_effective_leverage: 80,
            margin_requirement: 1.25,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX600UP',
                instrument: 'DEX 600 UP Index',
            },
            contract_size: 0.01,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.86,
            target_spread: 0.88,
            max_effective_leverage: 80,
            margin_requirement: 1.25,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX1500DN',
                instrument: 'DEX 1500 DOWN Index',
            },
            contract_size: 0.01,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.91,
            target_spread: 0.93,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'DEX1500UP',
                instrument: 'DEX 1500 UP Index',
            },
            contract_size: 0.01,
            base_currency: 'USD',
            minimum_size: 0.01,
            minimum_spread: 0.92,
            target_spread: 0.94,
            max_effective_leverage: 100,
            margin_requirement: 1,
            swap_long: -0.0694,
            swap_short: -0.0694,
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
    ],
    eu_data: [
        {
            instrument: {
                symbol: 'BOOM300EU',
                instrument: 'Boom 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 1,
            minimum_spread: 0.12,
            target_spread: 0.122,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-0.08%',
            swap_short: '-0.08%',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'CRASH300EU',
                instrument: 'Crash 300 Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.5,
            minimum_spread: 0.204,
            target_spread: 0.22,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-0.08%',
            swap_short: '-0.08%',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX1501S',
                instrument: 'Volatility 150 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.005,
            minimum_spread: 5.15,
            target_spread: 5.15,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-0.04%',
            swap_short: '-0.04%',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
        {
            instrument: {
                symbol: 'VINDEX2501S',
                instrument: 'Volatility 250 (1s) Index',
            },
            contract_size: 1,
            base_currency: 'USD',
            minimum_size: 0.002,
            minimum_spread: 73.85,
            target_spread: 73.85,
            max_effective_leverage: 5,
            margin_requirement: '20.00%',
            swap_long: '-0.07%',
            swap_short: '-0.07%',
            trading_hours: 'Mon 00:00 - Sun 24:00 GMT',
        },
    ],
}
export default derived_specification
