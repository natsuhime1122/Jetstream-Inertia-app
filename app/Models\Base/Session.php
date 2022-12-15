<?php

namespace App\Models\Base;

use App\Models\Base\Base\Session as BaseSession;

class Session extends BaseSession
{
	protected $fillable = [
		'user_id',
		'ip_address',
		'user_agent',
		'payload',
		'last_activity'
	];
}
