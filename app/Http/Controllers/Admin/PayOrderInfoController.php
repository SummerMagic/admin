<?php

namespace App\Http\Controllers\Admin;

use App\Http\Filters\PayOrderInfoFilter;
use App\Http\Requests\PayOrderInfoRequest;
use App\Http\Resources\PayOrderInfoResource;
use App\Models\PayOrderInfo;
use Illuminate\Http\Request;

class PayOrderInfoController extends Controller
{
    public function index(PayOrderInfoFilter $filter)
    {
        $payOrderInfos = PayOrderInfo::query()
            ->filter($filter)
            ->paginate();

        return $this->ok(PayOrderInfoResource::collection($payOrderInfos));
    }

    public function create()
    {
        return $this->ok();
    }

    public function store(PayOrderInfoRequest $request)
    {
        $inputs = $request->validated();
        $payOrderInfo = PayOrderInfo::create($inputs);

        return $this->created(PayOrderInfoResource::make($payOrderInfo));
    }

    public function edit(Request $request, PayOrderInfo $payOrderInfo)
    {
        return $this->ok(PayOrderInfoResource::make($payOrderInfo));
    }

    public function update(PayOrderInfoRequest $request, PayOrderInfo $payOrderInfo)
    {
        $inputs = $request->validated();
        $payOrderInfo->update($inputs);

        return $this->created(PayOrderInfoResource::make($payOrderInfo));
    }

    public function destroy(PayOrderInfo $payOrderInfo)
    {
        $payOrderInfo->delete();
        return $this->noContent();
    }
}
