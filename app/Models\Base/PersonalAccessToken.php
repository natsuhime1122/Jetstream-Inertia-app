<?php

namespace App\Models\Base;

use App\Models\Base\Base\PersonalAccessToken as BasePersonalAccessToken;

class PersonalAccessToken extends BasePersonalAccessToken
{
	protected $hidden = [
		'token'
	];

	protected $fillable = [
		'tokenable_type',
		'tokenable_id',
		'name',
		'token',
		'abilities',
		'last_used_at',
		'expires_at'
	];
}
