<?php

namespace App\Models;

use function App\Helpers\priceFormat;

class PayOrderInfo extends Model
{
    protected $connection = 'mysql_app';
    protected $table = 'pay_order_info';

    protected $primaryKey = 'pay_order_id';
    public $timestamps = false;

    const CREATED_AT = 'create_time';
    const UPDATED_AT = 'update_time';

    /**
     * @订单金额转换
     * @param $value
     * @return string
     */
    public function getTotalFeeAttribute($value)
    {
        return priceFormat($value);
    }

    /**
     * @title 实际支付金额转换
     */
    public function getRealTotalFeeAttribute($value)
    {
        return priceFormat($value);
    }

    //剩余代扣金额
    public function getResiduePeriodFeeAttribute($value)
    {
        return priceFormat($value);
    }
    //最后一次代扣金额
    public function getLastPeriodFeeAttribute($value){
        return priceFormat($value);
    }
    protected $fillable = [
        'field_name',
    ];
}
