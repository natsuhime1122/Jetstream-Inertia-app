<?php

namespace App\Models\Base;

use App\Models\Base\Base\FailedJob as BaseFailedJob;

class FailedJob extends BaseFailedJob
{
	protected $fillable = [
		'uuid',
		'connection',
		'queue',
		'payload',
		'exception',
		'failed_at'
	];
}
