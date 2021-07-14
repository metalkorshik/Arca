<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fname', 'lname', 'mname', 'email', 'password',
        'rate', 'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        /* static::addGlobalScope('role', function (Builder $builder) {
            $builder->where('role', '=', 'root');
        }); */
    }

    public static function getStorage()
    {
        return storage_path('app') . '/public/users/';
    }

    public function role()
    {
        return $this->hasOne(Role::class, 'role', 'role');
    }

    public function info()
    {
        return $this->hasOne(UserInfo::class);
    }

    public function contacts()
    {
        return $this->hasMany(UserContact::class);
    }

    public function documents()
    {
        return $this->hasMany(UserDocument::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function flat()
    {
        return $this->hasOne(FlatLodger::class, 'lodger_id');
    }

    public function notes()
    {
        return $this->hasMany(UserNote::class);
    }

    public function prepayments()
    {
        return $this->hasMany(UserPrepayment::class);
    }

    public function getFlat()
    {
        $logder = $this->hasOne(FlatLodger::class, 'lodger_id')->first();
        return $logder != null ? $logder->flat()->first() : null;
    }

    public static function getByRole($role)
    {
        return User::where('role', $role)->get();
    }

    public static function getByRoles($roles = [])
    {
        $users = new User;//::where('role', $role);//
        foreach ($roles as $role)
            $users = $users->orWhere('role', $role);
        return $users->get();
    }

    /*
     *
     * Workers - role that cant access to crm (cant login)
    */
    public static function getStaff()
    {
        $staffRoles = ['adjuster', 'welder', 'electrician'];
        return User::whereIn('role', $staffRoles)->get();
    }

    public function hasContracts()
    {
        return ContractStaff::whereHas('user', function ($query) {
            $query->where('id', $this->id);
        })->count();
    }

    public function getFio()
	{
		return "{$this->lname} {$this->fname} {$this->mname}";
    }

    public function getInitials($lname = true, $fname = true, $mname = true, $length = 1)
    {
        return ($lname ? mb_substr($this->lname, 0, $length) . '.' : $this->lname . ' ')
            . ($fname ? mb_substr($this->fname, 0, $length) . '.' : $this->fname . ' ')
            . ($mname ? mb_substr($this->mname, 0, $length) . '.' : $this->mname);
    }
}
