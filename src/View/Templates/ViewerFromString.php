<?php

namespace SilverStripe\View\Templates;

/**
 * Special SSViewer that will process a template passed as a string, rather than a filename.
 */
class ViewerFromString extends Viewer
{
    /**
     * The global template caching behaviour if no instance override is specified
     *
     * @config
     * @var bool
     */
    private static $cache_template = true;

    /**
     * The template to use
     *
     * @var string
     */
    protected $content;

    /**
     * Indicates whether templates should be cached
     *
     * @var bool
     */
    protected $cacheTemplate;

    /**
     * @param string $content
     * @param TemplateParserInterface $parser
     */
    public function __construct($content, TemplateParserInterface $parser = null)
    {
        if ($parser) {
            $this->setParser($parser);
        }

        $this->content = $content;
    }

    /**
     * {@inheritdoc}
     */
    public function process($item, $arguments = null, $scope = null)
    {
        $hash = sha1($this->content);
        $cacheFile = TEMP_PATH . DIRECTORY_SEPARATOR . ".cache.$hash";

        if (!file_exists($cacheFile) || isset($_GET['flush'])) {
            $content = $this->parseTemplateContent($this->content, "string sha1=$hash");
            $fh = fopen($cacheFile, 'w');
            fwrite($fh, $content);
            fclose($fh);
        }

        $val = $this->includeGeneratedTemplate($cacheFile, $item, $arguments, null, $scope);

        if ($this->cacheTemplate !== null) {
            $cacheTemplate = $this->cacheTemplate;
        } else {
            $cacheTemplate = static::config()->get('cache_template');
        }

        if (!$cacheTemplate) {
            unlink($cacheFile);
        }

        return $val;
    }

    /**
     * @param boolean $cacheTemplate
     */
    public function setCacheTemplate($cacheTemplate)
    {
        $this->cacheTemplate = (bool)$cacheTemplate;
    }

    /**
     * @return boolean
     */
    public function getCacheTemplate()
    {
        return $this->cacheTemplate;
    }
}
