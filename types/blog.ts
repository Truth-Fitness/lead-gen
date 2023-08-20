import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeBlog'
 * @name TypeBlogFields
 * @type {TypeBlogFields}
 * @memberof TypeBlog
 */
export interface TypeBlogFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'description' (Description)
   * @name Description
   * @localized false
   */
  description: EntryFieldTypes.Text;
  /**
   * Field type definition for field 'content' (Content)
   * @name Content
   * @localized false
   */
  content: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'mainImage' (Main Image)
   * @name Main Image
   * @localized false
   */
  mainImage?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'blog' (Blog)
 * @name TypeBlogSkeleton
 * @type {TypeBlogSkeleton}
 * @author 2TP4fUmJ9er0CLRYL5rUVk
 * @since 2023-08-20T11:40:37.269Z
 * @version 3
 */
export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
/**
 * Entry type definition for content type 'blog' (Blog)
 * @name TypeBlog
 * @type {TypeBlog}
 * @author James Grogan<james.grogan2@gmail.com>
 * @since 2023-08-20T11:40:37.269Z
 * @version 3
 * @link https://app.contentful.com/spaces/9nisvpjutcnh/environments/master/content_types/blog
 */
export type TypeBlog<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export type Blog = TypeBlog<undefined, "en-GB">;
