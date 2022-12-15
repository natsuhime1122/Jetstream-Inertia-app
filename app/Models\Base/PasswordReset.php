<?php

namespace App\Models\Base;

use App\Models\Base\Base\PasswordReset as BasePasswordReset;

class PasswordReset extends BasePasswordReset
{
	protected $hidden = [
		'token'
	];

	protected $fillable = [
		'email',
		'token'
	];
}
