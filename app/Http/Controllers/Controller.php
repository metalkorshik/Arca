<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Traits\Filter;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Filter;

    public function getSqlDate($date, $delitimer = '/', $connector = '.')
    {   
        $result = explode($delitimer, $date);
        return count($result) > 2 ? "{$result[2]}$connector{$result[1]}$connector{$result[0]}" : $date;
    }

    public function getFirstMonthSqlDate()
    {   
        return date('Y') . '-' . date('m') . '-' . '01';
    }

    public function log($data)
    {
        echo '<pre>';
		var_dump($data);
		echo '</pre>';
    }

    public function removeDir($dir)
    {
        if (is_dir($dir)) {
            $objects = scandir($dir);
            foreach ($objects as $object) {
                if ($object != "." && $object != "..") {
                    if (is_dir($dir. DIRECTORY_SEPARATOR .$object) && !is_link($dir."/".$object))
                        $this->removeDir($dir. DIRECTORY_SEPARATOR .$object);
                    else
                        unlink($dir. DIRECTORY_SEPARATOR .$object);
                }
            }
            rmdir($dir);
        }
    }
}
