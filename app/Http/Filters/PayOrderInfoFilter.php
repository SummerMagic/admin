<?php

namespace App\Http\Filters;

class PayOrderInfoFilter extends Filter
{
    protected $simpleFilters = [
        'id',
    ];

    protected $filters = [
        'field_name',
    ];

    protected function fieldName($val)
    {
        $this->builder->where('field_name', $val);
    }
}
